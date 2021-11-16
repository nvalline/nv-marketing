import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import MobileNavLinks from './MobileNavLinks';
import Nav from './Nav';
import Overlay from './Overlay';

import styles from '../../styles/header/Header.module.scss';
import { Slugger } from 'marked';

function Header() {
	let oldScrollY = 0;

	const router = useRouter();

	const [classes, setClasses] = useState(`${styles.header}`);
	const [direction, setDirection] = useState('down');
	const [hamburgerIsActive, setHamburgerIsActive] = useState(false);
	const [headerHeight, setHeaderHeight] = useState(null);
	const [scrolled, setScrolled] = useState(false);

	// Toggle hamburger state
	const toggleHamburger = () => {
		setHamburgerIsActive(!hamburgerIsActive);
	};

	// Find header height
	const headerRef = useCallback((domNode) => {
		if (domNode) {
			setHeaderHeight(domNode.getBoundingClientRect().height);
		}
	}, []);

	// Set classes
	useEffect(() => {
		if (direction === 'up' && scrolled === true) {
			setClasses(`${styles.header} ${styles.sticky}`);
			return;
		}

		if (scrolled === true) {
			setClasses(`${styles.header} ${styles.animate}`);
			return;
		}
		// default
		if (scrolled === false) {
			setClasses(`${styles.header}`);
			return;
		}
	}, [direction, scrolled]);

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

	// Header scroll
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > headerHeight) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}

			return () => {
				window.removeEventListener('scroll');
			};
		});
	}, []);

	// Scroll direction
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY < oldScrollY) {
				setDirection('up');
			} else {
				setDirection('down');
			}
			oldScrollY = window.scrollY;

			return () => {
				window.removeEventListener('scroll');
			};
		});
	}, []);

	return (
		<header ref={headerRef} className={classes}>
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
