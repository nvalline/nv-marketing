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
	const [prevPathname, setPrevPathname] = useState(pathname);
	const [isVisible, setIsVisible] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);

	if (prevPathname !== pathname) {
		setPrevPathname(pathname);
		setIsVisible(false);
		setOpenDropdown(null);
	}

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
							<a href='tel:8017421290' className={styles.mobile_nav__phone}>
								<svg width={18} height={18} viewBox='0 0 24 24' fill='none' aria-hidden='true'>
									<path d='M20.707 14.7036C20.5918 13.9032 19.9738 13.2792 19.1782 13.0932C16.0858 12.3684 15.3106 10.5876 15.1798 8.61239C14.6314 8.51039 13.6558 8.39999 11.9998 8.39999C10.3438 8.39999 9.36819 8.51039 8.81979 8.61239C8.68899 10.5876 7.91379 12.3684 4.82139 13.0932C4.02579 13.2804 3.40779 13.9032 3.29259 14.7036L2.69619 18.834C2.48619 20.2884 3.55419 21.6 5.03979 21.6H18.9598C20.4442 21.6 21.5134 20.2884 21.3034 18.834L20.707 14.7036ZM11.9998 18.5904C10.3258 18.5904 8.96859 17.2464 8.96859 15.5904C8.96859 13.9344 10.3258 12.5904 11.9998 12.5904C13.6738 12.5904 15.031 13.9344 15.031 15.5904C15.031 17.2464 13.6726 18.5904 11.9998 18.5904ZM23.9398 7.19999C23.911 5.39999 19.3294 2.40119 11.9998 2.39999C4.66899 2.40119 0.0873902 5.39999 0.0597902 7.19999C0.0321902 8.99999 0.0849903 11.3424 3.10179 10.9524C6.63099 10.4952 6.41379 9.26279 6.41379 7.50119C6.41379 6.27239 9.28419 5.97599 11.9998 5.97599C14.7154 5.97599 17.5846 6.27239 17.5858 7.50119C17.5858 9.26279 17.3686 10.4952 20.8978 10.9524C23.9134 11.3424 23.9674 8.99999 23.9398 7.19999Z' fill='currentColor' />
								</svg>
								(801) 742-1290
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
