import Logo from './logo';
import Links from './links';
import Social from './social';
import Copyright from './copyright';

import styles from '../../styles/footer/Footer.module.scss';

function Footer() {
	return (
		<footer className={styles.footer}>
			<Logo />
			<hr className={styles.footer__line} />
			<div className={styles.footer__links}>
				<Links />
				<Social />
			</div>
			<hr className={styles.footer__line} />
			<Copyright />
		</footer>
	);
}

export default Footer;
