// Components
import Logo from '../misc/Logo';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';

// Styles
import styles from '../../styles/components/footer/Footer.module.scss';

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.footer__wrapper}>
				<div className={styles.footer__nav___block}>
					<NavLinks />
					<SocialLinks />
				</div>
				<div className={styles.footer__logo___wrapper}>
					<Logo />
				</div>
				<div className={styles.footer__copyright___block}>
					<p className={styles.footer__copyright}>
						Copyright &copy; {year} | NV Marketing, LLC
					</p>
					<p className={styles.footer__copyright}>All Rights Reserved</p>
				</div>
			</div>
		</footer>
	);
}
