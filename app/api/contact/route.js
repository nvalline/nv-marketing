const BREVO_API_URL = 'https://api.brevo.com/v3';
const NOTIFICATION_EMAIL = 'contact@nv-marketing.com';

// Brevo's SMS attribute requires E.164 format (e.g. +13035551234); assume US for 10-digit numbers
function formatPhone(phone) {
	if (!phone) return null;
	const digits = phone.replace(/\D/g, '');
	if (phone.trim().startsWith('+')) return `+${digits}`;
	if (digits.length === 10) return `+1${digits}`;
	if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
	return null;
}

export async function POST(req) {
	const { first_name, last_name, from_email, phone, service_type, message, website } =
		await req.json();

	if (!first_name || !last_name || !from_email || !service_type || !message) {
		return new Response('Missing required fields', { status: 422 });
	}

	// Honeypot check — bots fill this in, humans leave it empty
	if (website) {
		return new Response('OK', { status: 200 });
	}

	const brevoHeaders = {
		'api-key': process.env.BREVO_API_KEY,
		'Content-Type': 'application/json',
		Accept: 'application/json'
	};

	// Create or update contact in Brevo (non-fatal if it fails)
	try {
		const attributes = {
			FIRSTNAME: first_name,
			LASTNAME: last_name,
			SERVICE_TYPE: service_type,
			MESSAGE: message
		};
		const sms = formatPhone(phone);
		const createContact = (attrs) =>
			fetch(`${BREVO_API_URL}/contacts`, {
				method: 'POST',
				headers: brevoHeaders,
				body: JSON.stringify({
					email: from_email,
					attributes: attrs,
					listIds: [6],
					updateEnabled: true
				})
			});

		let contactRes = await createContact(sms ? { ...attributes, SMS: sms } : attributes);

		// Brevo rejects numbers it can't validate — retry without the phone so the lead isn't lost
		if (!contactRes.ok && sms) {
			console.error('Brevo contact creation error (with phone):', await contactRes.text());
			contactRes = await createContact(attributes);
		}

		if (!contactRes.ok) {
			console.error('Brevo contact creation error:', await contactRes.text());
		}
	} catch (err) {
		console.error('Brevo contact creation error:', err);
	}

	// Send notification email to site owner
	try {
		const emailRes = await fetch(`${BREVO_API_URL}/smtp/email`, {
			method: 'POST',
			headers: brevoHeaders,
			body: JSON.stringify({
				sender: { email: NOTIFICATION_EMAIL, name: 'NV Marketing Website' },
				to: [{ email: NOTIFICATION_EMAIL, name: 'NV Marketing' }],
				subject: `New Contact Form Submission – ${service_type}`,
				htmlContent: `
					<h2>New Contact Form Submission</h2>
					<p><strong>Name:</strong> ${first_name} ${last_name}</p>
					<p><strong>Email:</strong> ${from_email}</p>
					<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
					<p><strong>Service:</strong> ${service_type}</p>
					<p><strong>Message:</strong></p>
					<p>${message}</p>
				`
			})
		});

		if (!emailRes.ok) {
			const errText = await emailRes.text();
			console.error('Brevo email error:', errText);
			return new Response('Failed to send notification', { status: 500 });
		}
	} catch (err) {
		console.error('Brevo email send error:', err);
		return new Response('Failed to send notification', { status: 500 });
	}

	return new Response('OK', { status: 200 });
}
