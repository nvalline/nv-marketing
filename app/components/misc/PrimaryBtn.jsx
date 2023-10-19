// Styles
import styles from '../../styles/components/misc/PrimaryBtn.module.scss';

export default function PrimaryBtn({ classname, text, type }) {
	return (
		<button className={`${styles.primary_btn} ${classname}`} type={type}>
			{text}
		</button>
	);
}
