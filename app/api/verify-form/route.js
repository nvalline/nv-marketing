// Verify Form with hCaptcha

const VERIFY_URL = 'https://hcaptcha.com/siteverify';
const SECRET_KEY = process.env.NEXT_PUBLIC_HCAPTCHA_SECRET;

const sleep = () =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 350);
	});

export async function POST(req) {
	// Extract the token and ekey from the request body
	const { token } = await req.json();

	if (req.method === 'POST') {
		// If token or ekey are missing return an error
		if (!token) {
			return res.status(422).json({
				message: 'Unprocessable request, please provide the required fields'
			});
		}

		try {
			// Ping the hCaptcha verify API to verify the captcha code received
			const response = await fetch(VERIFY_URL, {
				method: 'POST',
				body: `response=${token}&secret=${SECRET_KEY}`,
				headers: {
					'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'
				}
			});

			const captchaValidation = await response.json();
			/**
			 * {
			 *    "success": true|false,     // is the passcode valid, and does it meet security criteria you specified, e.g. sitekey?
			 *    "challenge_ts": timestamp, // timestamp of the challenge (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
			 *    "hostname": string,        // the hostname of the site where the challenge was solved
			 *    "credit": true|false,      // optional: whether the response will be credited
			 *    "error-codes": [...]       // optional: any error codes
			 *    "score": float,            // ENTERPRISE feature: a score denoting malicious activity.
			 *    "score_reason": [...]      // ENTERPRISE feature: reason(s) for score. See BotStop.com for details.
			 *  }
			 */
			if (captchaValidation.success) {
				await sleep();

				// Return 200 if everything is successful
				return new Response('OK', { status: 200 });
			}

			return new Response('Unprocessable request, invalid captcha code', {
				status: 422
			});
		} catch (error) {
			console.log(error);
			return new Response('Something went wrong', { status: 422 });
		}
	}

	// Return 404 if someone pings the API with a method other than POST
	return new Response('Not Found', { status: 404 });
}
