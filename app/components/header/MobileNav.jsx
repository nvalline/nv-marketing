'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// Components
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// Styles
import styles from '@/app/styles/components/header/MobileNav.module.scss';

export default function MobileNav() {
	const pathname = usePathname();
	const [showIcon, setShowIcon] = useState(false);

	const handleIconToggle = () => {
		setShowIcon(!showIcon);
	};

	// Disable scroll when overlay is active
	useEffect(() => {
		if (showIcon) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [showIcon]);

	// Update icon state on route change
	useEffect(() => {
		setShowIcon(false);
	}, [pathname]);

	return (
		<div>
			{/* OnClick Change Icon */}
			<div onClick={handleIconToggle}>
				{showIcon ? (
					<AiOutlineClose size={20} className={styles.mobile_nav__icons} />
				) : (
					<AiOutlineMenu size={20} className={styles.mobile_nav__icons} />
				)}
			</div>

			<div
				className={
					showIcon
						? `${styles.mobile_nav__overlay} ${styles.mobile_nav__fadeIn}`
						: `${styles.mobile_nav__overlay} ${styles.mobile_nav__fadeOut}`
				}
			>
				<div className={styles.mobile_nav__links}>
					<ul className={styles.mobile_nav__linksList}>
						<li className={styles.mobile_nav__link}>
							<Link href='/'>Home</Link>
						</li>
						<li className={styles.mobile_nav__link}>
							<Link href='/about'>About</Link>
						</li>
						<li className={styles.mobile_nav__link}>
							<Link href='/services'>Services</Link>
						</li>
						<li className={styles.mobile_nav__link}>
							<Link href='/blog'>Blog</Link>
						</li>
					</ul>
					<Link href='/contact'>
						<button type='button' className={styles.mobile_nav__button}>
							Contact
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
