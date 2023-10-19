// Styles
import styles from '../../styles/components/misc/SecondaryBtn.module.scss';

export default function SecondaryBtn({ classname, text }) {
	return <div className={`${styles.secondary_btn} ${classname}`}>{text}</div>;
}
