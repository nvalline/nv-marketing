import Circle from '../misc/Circle';
import Logo from './Logo';
import Links from './Links';
import Social from './Social';
import Copyright from './Copyright';

import styles from '../../styles/footer/Footer.module.scss';

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<Logo screen='mobile' />
				<hr className={styles.footer__line} />
				<div className={styles.footer__links}>
					<Links />
					<Logo screen='desktop' />
					<Circle />
					<Social />
				</div>
				<hr className={styles.footer__line} />
				<Copyright />
			</div>
		</footer>
	);
}

export default Footer;
