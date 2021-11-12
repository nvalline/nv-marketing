import Image from 'next/image';
import Link from 'next/link';
import Hamburger from './Hamburger';
import NavLinks from './NavLinks';

import logoImg from '../../public/images/svgs/nv_mktg_logo_white.svg';

import styles from '../../styles/header/Nav.module.scss';

function Nav(props) {
	return (
		<nav className={styles.nav}>
			<div className={styles.nav__logoBlock}>
				<Link href='/'>
					<a>
						<div className={styles.nav__logoWrapper}>
							{/* <Image
								src={logoImg}
								alt='NV Marketing, LLC logo'
								className={styles.nav__logo}
								layout='fill'
								priority
							/> */}
							<img
								src={logoImg.src}
								alt='NV Marketing, LLC logo'
								className={styles.nav__logo}
							/>
						</div>
					</a>
				</Link>
			</div>
			<Hamburger {...props} />
			<NavLinks />
		</nav>
	);
}

export default Nav;
