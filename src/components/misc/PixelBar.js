import styles from '../../styles/misc/PixelBar.module.scss';

function PixelBar({ position }) {
	return (
		<div
			className={
				position === 'top'
					? `${styles.pixelsBar} ${styles.top}`
					: `${styles.pixelsBar} ${styles.bottom}`
			}
		></div>
	);
}

export default PixelBar;
