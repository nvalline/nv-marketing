import { useRef } from 'react';
import Button from '../../misc/Buttons';
import { TextInput, Textarea } from '../../misc/FormItems';

import styles from '../../../styles/contact/form/Form.module.scss';

function Form() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		// ! ENTER EMAIL JS
		console.log('FORM SUBMITTED');
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
