const BREVO_API_URL = 'https://api.brevo.com/v3';
const NOTIFICATION_EMAIL = 'contact@nv-marketing.com';

export async function POST(req) {
	const { first_name, last_name, from_email, service_type, message, website } =
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
		await fetch(`${BREVO_API_URL}/contacts`, {
			method: 'POST',
			headers: brevoHeaders,
			body: JSON.stringify({
				email: from_email,
				attributes: {
					FIRSTNAME: first_name,
					LASTNAME: last_name
				},
				updateEnabled: true
			})
		});
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
