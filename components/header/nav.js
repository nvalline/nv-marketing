import Image from 'next/image';
import Link from 'next/link';
import Hamburger from './hamburger';

import logoImg from '../../public/images/nv_mktg_logo_white.svg';

import styles from '../../styles/header/Nav.module.scss';

function Nav(props) {
	return (
		<nav className={styles.nav}>
			<div className={styles.nav__logoBlock}>
				<Link href='/'>
					<a>
						<div className={styles.nav__logoWrapper}>
							<Image
								src={logoImg}
								alt='NV Marketing, LLC logo'
								className={styles.nav__logo}
								layout='fill'
							/>
						</div>
					</a>
				</Link>
			</div>
			<Hamburger {...props} />
		</nav>
	);
}

export default Nav;
