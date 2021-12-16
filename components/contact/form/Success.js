import styles from '../../../styles/contact/form/Success.module.scss';

export default function Success() {
	return (
		// Form submit success message
		<div className={styles.success}>
			<h2 className={styles.success__title}>Success!</h2>
			<p className={styles.success__content}>
				Your message was received and you should receive an email confirmation.
			</p>
			<p className={styles.success__content}>
				Someone will contact you shortly.
			</p>
		</div>
	);
}
