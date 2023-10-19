// Components
import DesktopNav from './DesktopNav';
import Logo from '../misc/Logo';
import MobileNav from './MobileNav';

// Styles
import styles from '@/app/styles/components/header/Header.module.scss';

export default function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.header__nav}>
				{/* Logo */}
				<div className={styles.header__logo___wrapper}>
					<Logo />
				</div>

				{/* Desktop Navigation */}
				<DesktopNav />

				{/* Mobile Navigation */}
				<MobileNav />
			</nav>
		</header>
	);
}
