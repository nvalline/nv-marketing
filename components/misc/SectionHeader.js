import styles from '../../styles/misc/SectionHeader.module.scss';

function SectionHeader({ title }) {
	return (
		<>
			<h2 className={styles.title}>{title}</h2>
			<hr className={styles.line} />
		</>
	);
}

export default SectionHeader;
