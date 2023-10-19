// Verify Form with hCaptcha

const VERIFY_URL = 'https://hcaptcha.com/siteverify';
const SECRET_KEY = process.env.NEXT_PUBLIC_HCAPTCHA_SECRET;

const sleep = () =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 350);
	});

export default async function handler(token) {
	let response = '';
	// export default async function handler(req, res) {
	// const { body, method } = req;

	// Extract the token and ekey from the request body
	// const { token } = body;

	// if (method === 'POST') {
	// If token or ekey are missing return an error
	if (!token) {
		response = 'Unprocessable request, please provide the required fields';
		return response;
		// return res.status(422).json({
		// 	message: 'Unprocessable request, please provide the required fields'
		// });
	}

	try {
		// Ping the hCaptcha verify API to verify the captcha code received
		const res = await fetch(VERIFY_URL, {
			method: 'POST',
			body: `response=${token}&secret=${SECRET_KEY}`,
			headers: {
				'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'
			}
		});

		const captchaValidation = await res.json();

		// const captchaValidation = { success: true };

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
			response = 'OK';
			return response;
			// return res.status(200).send('OK');
		}

		response = 'Unprocessable request, invalid captcha code';
		return response;
		// return res.status(422).json({
		// 	message: 'Unprocessable request, invalid captcha code'
		// });
	} catch (error) {
		console.log(error);
		response = 'Something went wrong';
		return response;
		// return res.status(422).json({ message: 'Something went wrong' });
	}
	// }

	// Return 404 if someone pings the API with a method other than POST
	// return res.status(404).send('Not Found');
}
