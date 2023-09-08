import styles from '../../styles/misc/ContactAccent.module.scss';

function ContactAccent({ top }) {
	return (
		<div
			className={
				top === 'top' ? `${styles.contactAccentTop}` : `${styles.contactAccent}`
			}
		></div>
	);
}

export default ContactAccent;
