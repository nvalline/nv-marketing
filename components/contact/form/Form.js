import { useRef } from 'react';
import emailjs from 'emailjs-com';

import Button from '../../misc/Buttons';
import { TextInput, Textarea } from '../../misc/FormItems';

import styles from '../../../styles/contact/form/Form.module.scss';

function Form({ setShowForm }) {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		console.log(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

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
					setShowForm(false);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<form ref={form} onSubmit={sendEmail} className={styles.form}>
			<TextInput
				type='text'
				name='from_name'
				className={styles.form__input}
				placeholder='Name'
			/>
			<TextInput
				type='email'
				name='from_email'
				className={styles.form__input}
				placeholder='Email'
			/>
			<Textarea
				id='message'
				name='message'
				rows='5'
				placeholder='Your Message'
				className={styles.form__textarea}
			/>
			<Button
				type='submit'
				className={styles.form__button}
				text='send message'
			/>
		</form>
	);
}

export default Form;
