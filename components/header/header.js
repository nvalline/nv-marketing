import Nav from './nav';
import styles from '../../styles/header/Header.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<Nav />
		</header>
	);
}

export default Header;
