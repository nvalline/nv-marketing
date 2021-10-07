import styles from '../../styles/header/Hamburger.module.scss';

function Hamburger() {
	return (
		<div className={styles.hamburger}>
			<button className={styles.hamburger__icon}>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
	);
}

export default Hamburger;
