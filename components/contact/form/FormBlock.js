import Form from './Form';

import styles from '../../../styles/contact/form/FormSection.module.scss';

function FormSection() {
	return (
		<div className={styles.formSection}>
			<h2 className={styles.formSection__title}>Have a Question?</h2>
			<h3 className={styles.formSection__subTitle}>
				Send us a message and we’ll get in touch
			</h3>
			<Form />
		</div>
	);
}

export default FormSection;
