'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// Components
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Links from './Links';

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
		<div className={styles.mobile_nav}>
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
				<Links
					divClass={styles.mobile_nav__links}
					ulClass={styles.mobile_nav__linksList}
					liClass={styles.mobile_nav__link}
					btnClass={styles.mobile_nav__button}
				/>
			</div>
		</div>
	);
}
