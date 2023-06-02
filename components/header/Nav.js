import Link from 'next/link';

import Hamburger from './Hamburger';
import { ImageFillPriority } from '../misc/Images';
import NavLinks from './NavLinks';

import logoImg from '../../public/images/svgs/nv_mktg_logo_white.svg';

import styles from '../../styles/header/Nav.module.scss';

function Nav(props) {
	return (
		<nav className={styles.nav}>
			<div className={styles.nav__logoBlock}>
				<Link href='/' passHref>
					<div className={styles.nav__logoWrapper}>
						<ImageFillPriority
							src={logoImg}
							alt='NV Marketing, LLC logo'
							className={styles.nav__logo}
						/>
					</div>
				</Link>
			</div>
			<Hamburger {...props} />
			<NavLinks />
		</nav>
	);
}

export default Nav;
