import Link from 'next/link';
import { linkList } from './LinkDataList';

// Styles
import styles from '@/app/styles/components/header/DesktopNav.module.scss';

export default function DesktopNav() {
	return (
		<div className={styles.desktop_nav}>
			<div className={styles.desktop_nav__links}>
				<ul className={styles.desktop_nav__linksList}>
					{linkList.map((link, index) => {
						if (link.children) {
							return (
								<li key={index} className={`${styles.desktop_nav__link} ${styles.desktop_nav__link_wrapper}`}>
									<Link href={link.href}>{link.title}</Link>
									<ul className={styles.desktop_nav__dropdown}>
										{link.children.map((child, childIndex) => (
											<li key={childIndex} className={styles.desktop_nav__dropdown_item}>
												<Link href={child.href}>{child.title}</Link>
											</li>
										))}
									</ul>
								</li>
							);
						}

						return (
							<li key={index} className={styles.desktop_nav__link}>
								<Link href={link.href}>{link.title}</Link>
							</li>
						);
					})}
				</ul>
				<Link href='/contact'>
					<button type='button' className={styles.desktop_nav__button}>
						Contact
					</button>
				</Link>
			</div>
		</div>
	);
}
