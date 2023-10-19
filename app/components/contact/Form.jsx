'use client';

import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import HCaptcha from '@hcaptcha/react-hcaptcha';

// Components
import PrimaryBtn from '../misc/PrimaryBtn';

// Styles
import styles from '../../styles/components/contact/Form.module.scss';

export default function Form() {
	const form = useRef();
	const [formValues, setFormValues] = useState({
		from_name: '',
		from_email: '',
		message: ''
	});

	// hCaptcha Consts
	const hcaptchaRef = useRef(null);
	const SITE_KEY = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;

	// Update form input values
	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	// Handle form submit
	const handleSubmit = (e) => {
		e.preventDefault();

		// Execute the hCaptcha when the form is submitted
		hcaptchaRef.current.execute();
	};

	const handleVerificationSuccess = async (token) => {
		// If the hCaptcha code is null or undefined indicating that the hCaptcha was expired then return early
		if (!token) {
			return;
		}

		try {
			const response = await fetch('/api/verify-form', {
				method: 'POST',
				body: JSON.stringify({ token }),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (response.ok) {
				emailjs
					.sendForm(
						process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
						process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
						form.current,
						process.env.NEXT_PUBLIC_EMAILJS_USER_ID
					)
					.then(
						(result) => {
							console.log(result.text);
							setValues({
								from_name: '',
								from_email: '',
								message: ''
							});
						},
						(error) => {
							console.log(error.text);
						}
					);

				setShowForm(false);
			} else {
				const error = await response.json();
				throw new Error(error.message);
			}
		} catch (error) {
			console.log(error?.message || 'Something went wrong');
		} finally {
			setValues({
				from_name: '',
				from_email: '',
				message: ''
			});
		}
	};

	return (
		<form ref={form} onSubmit={handleSubmit} className={styles.form}>
			<input
				type='text'
				placeholder='Full Name'
				onChange={handleChange}
				className={styles.form__input}
			/>
			<input
				type='email'
				placeholder='Email'
				onChange={handleChange}
				className={styles.form__input}
			/>
			<textarea
				name='message'
				id='message'
				rows='5'
				onChange={handleChange}
				placeholder='Message'
				className={styles.form__textarea}
			></textarea>
			<HCaptcha
				id='test'
				ref={hcaptchaRef}
				size='invisible'
				sitekey={SITE_KEY}
				onVerify={(token) => handleVerificationSuccess(token)}
			/>
			<PrimaryBtn text='Submit' classname={styles.form__btn} />
		</form>
	);
}
