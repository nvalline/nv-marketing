// Styles
import styles from '../../styles/components/misc/PrimaryBtn.module.scss';

export default function PrimaryBtn({ classname, text }) {
	return <div className={`${styles.primary_btn} ${classname}`}>{text}</div>;
}
