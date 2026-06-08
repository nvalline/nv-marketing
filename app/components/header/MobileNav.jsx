'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { linkContainer, linkVars, navOverlay } from './MotionVars';
import { linkList } from './LinkDataList';

// Components
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// Styles
import styles from '@/app/styles/components/header/MobileNav.module.scss';

export default function MobileNav() {
	const pathname = usePathname();
	const [isVisible, setIsVisible] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);

	const handleIconToggle = () => {
		setIsVisible(!isVisible);
	};

	// Disable scroll when overlay is active
	useEffect(() => {
		if (isVisible) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isVisible]);

	// Update icon state on route change
	useEffect(() => {
		setIsVisible(false);
		setOpenDropdown(null);
	}, [pathname]);

	return (
		<div className={styles.mobile_nav}>
			{/* OnClick Change Icon */}
			<div onClick={handleIconToggle}>
				{isVisible ? (
					<AiOutlineClose size={20} className={styles.mobile_nav__icons} />
				) : (
					<AiOutlineMenu size={20} className={styles.mobile_nav__icons} />
				)}
			</div>
			<AnimatePresence>
				{isVisible && (
					<motion.div
						variants={navOverlay}
						initial='hidden'
						animate='show'
						exit='exit'
						className={styles.mobile_nav__overlay}
					>
						<div className={styles.mobile_nav__links}>
							<motion.ul
								variants={linkContainer}
								initial='hidden'
								animate='show'
								exit='hidden'
								className={styles.mobile_nav__linksList}
							>
								{linkList.map((link, index) => {
									if (link.children) {
										const isOpen = openDropdown === index;
										return (
											<div key={index} style={{ overflow: 'hidden' }}>
												<motion.li
													variants={linkVars}
													className={styles.mobile_nav__link}
												>
													<div className={styles.mobile_nav__link_row}>
														<Link href={link.href}>{link.title}</Link>
														<button
															type='button'
															className={styles.mobile_nav__chevron}
															onClick={() => setOpenDropdown(isOpen ? null : index)}
															aria-label={isOpen ? 'Collapse services menu' : 'Expand services menu'}
														>
															{isOpen ? '▲' : '▼'}
														</button>
													</div>
													{isOpen && (
														<ul className={styles.mobile_nav__sub_links}>
															{link.children.map((child, childIndex) => (
																<li key={childIndex} className={styles.mobile_nav__sub_link}>
																	<Link href={child.href}>{child.title}</Link>
																</li>
															))}
														</ul>
													)}
												</motion.li>
											</div>
										);
									}

									return (
										<div key={index} style={{ overflow: 'hidden' }}>
											<motion.li
												variants={linkVars}
												className={styles.mobile_nav__link}
											>
												<Link href={link.href}>{link.title}</Link>
											</motion.li>
										</div>
									);
								})}
							</motion.ul>
							<Link href='/contact'>
								<button type='button' className={styles.mobile_nav__button}>
									Contact
								</button>
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
