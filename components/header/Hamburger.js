import styles from '../../styles/header/Hamburger.module.scss';

function Hamburger({ hamburgerIsActive, toggleHamburger }) {
	return (
		<div className={styles.hamburger}>
			<button
				aria-label='toggle menu'
				className={
					hamburgerIsActive
						? `${styles.hamburger__icon} ${styles.hamburger__icon___open}`
						: styles.hamburger__icon
				}
				onClick={toggleHamburger}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
	);
}

export default Hamburger;
