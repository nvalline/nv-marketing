import styles from '../../styles/misc/PixelBar.module.scss';

function PixelBar({ position, margin }) {
	let positionStyle = '';

	if (position === 'top') {
		positionStyle = {
			marginBottom: `${margin}rem`
		};
	} else if (position === 'bottom') {
		positionStyle = {
			marginTop: `${margin}rem`
		};
	}

	return <div className={styles.pixelsBar} style={positionStyle}></div>;
}

export default PixelBar;
