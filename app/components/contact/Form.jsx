'use client';

import { useRef, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

// Components
import PrimaryBtn from '../misc/PrimaryBtn';

// Styles
import styles from '../../styles/components/contact/Form.module.scss';

const EMPTY_FORM = {
	first_name: '',
	last_name: '',
	from_email: '',
	service_type: '',
	message: ''
};

export default function Form() {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [formValues, setFormValues] = useState(EMPTY_FORM);

	const hcaptchaRef = useRef(null);
	const SITE_KEY = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		hcaptchaRef.current.execute();
		setLoading(true);
	};

	const handleVerificationSuccess = async (token) => {
		if (!token) return;

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				body: JSON.stringify({ ...formValues, token }),
				headers: { 'Content-Type': 'application/json' }
			});

			if (response.ok) {
				setFormValues(EMPTY_FORM);
				setSuccess(true);
			} else {
				setError(true);
			}
		} catch {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<div className={styles.form__nameRow}>
				<input
					type='text'
					name='first_name'
					value={formValues.first_name}
					placeholder='First Name'
					onChange={handleChange}
					className={styles.form__input}
					required
				/>
				<input
					type='text'
					name='last_name'
					value={formValues.last_name}
					placeholder='Last Name'
					onChange={handleChange}
					className={styles.form__input}
					required
				/>
			</div>
			<input
				type='email'
				name='from_email'
				value={formValues.from_email}
				placeholder='Email'
				onChange={handleChange}
				className={styles.form__input}
				required
			/>
			<select
				name='service_type'
				value={formValues.service_type}
				onChange={handleChange}
				className={styles.form__select}
				data-placeholder={formValues.service_type === '' ? 'true' : undefined}
				required
			>
				<option value='' disabled>
					Service Inquiry
				</option>
				<option value='Web Design/Development'>Web Design/Development</option>
				<option value='SEO'>SEO</option>
				<option value='Other'>Other</option>
			</select>
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
