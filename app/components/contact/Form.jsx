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
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
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

		setLoading(true);
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
							setFormValues((prev) => ({
								...prev,
								from_name: '',
								from_email: '',
								message: ''
							}));

							setLoading(false);

							setSuccess(true);
						},
						(error) => {
							console.log(error.text);
						}
					);
			} else {
				setError(true);
			}
		} catch (error) {
			console.log(error?.message || 'Something went wrong');
			setError(true);
		} finally {
			setFormValues({
				from_name: '',
				from_email: '',
				message: ''
			});
			setLoading(false);
		}
	};

	return (
		<form ref={form} onSubmit={handleSubmit} className={styles.form}>
			<input
				type='text'
				name='from_name'
				value={formValues.from_name}
				placeholder='Full Name'
				onChange={handleChange}
				className={styles.form__input}
				required
			/>
			<input
				type='email'
				name='from_email'
				value={formValues.from_email}
				placeholder='Email'
				onChange={handleChange}
				className={styles.form__input}
				required
			/>
			<textarea
				id='message'
				name='message'
				value={formValues.message}
				rows='5'
				onChange={handleChange}
				placeholder='Message'
				className={styles.form__textarea}
				required
			></textarea>
			<HCaptcha
				id='test'
				ref={hcaptchaRef}
				size='invisible'
				sitekey={SITE_KEY}
				onVerify={(token) => handleVerificationSuccess(token)}
			/>
			<PrimaryBtn
				type='submit'
				text={loading === true ? '. . .' : 'Submit'}
				classname={styles.form__btn}
			/>
			{success && (
				<p className={styles.success}>
					Your message was successfully submitted.
				</p>
			)}
			{error && (
				<p className={styles.error}>
					Oops, something went wrong. Please try again later.
				</p>
			)}
		</form>
	);
}
