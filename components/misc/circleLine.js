import styles from '../../styles/misc/CircleLine.module.scss';

function CircleLine({ accent }) {
	if (accent === 'left') {
		return <div className={styles.circleLineLeft}></div>;
	} else if (accent === 'right') {
		return <div className={styles.circleLineRight}></div>;
	} else {
		return <div className={styles.circleLineNone}></div>;
	}
}

export default CircleLine;
