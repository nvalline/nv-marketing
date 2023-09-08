import styles from '../../styles/header/Overlay.module.scss';

function Overlay({ hamburgerIsActive }) {
	return (
		<div
			className={
				hamburgerIsActive
					? `${styles.overlay} ${styles.overlay___fadeIn}`
					: `${styles.overlay} ${styles.overlay___fadeOut}`
			}
		></div>
	);
}

export default Overlay;
