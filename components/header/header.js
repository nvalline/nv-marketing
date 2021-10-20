import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import MobileNavLinks from './mobileNavLinks';
import Nav from './nav';
import Overlay from './overlay';

import styles from '../../styles/header/Header.module.scss';

function Header() {
	const [hamburgerIsActive, setHamburgerIsActive] = useState(false);
	const router = useRouter();

	// Toggle hamburger state
	const toggleHamburger = () => {
		setHamburgerIsActive(!hamburgerIsActive);
	};

	// Update hamburger state on route change
	useEffect(() => {
		setHamburgerIsActive(false);
	}, [router.asPath]);

	// Disable scroll when overlay is active
	useEffect(() => {
		if (hamburgerIsActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [hamburgerIsActive]);

	return (
		<header className={styles.header}>
			<Nav
				hamburgerIsActive={hamburgerIsActive}
				toggleHamburger={toggleHamburger}
			/>
			<Overlay hamburgerIsActive={hamburgerIsActive} />
			<MobileNavLinks hamburgerIsActive={hamburgerIsActive} />
		</header>
	);
}

export default Header;
