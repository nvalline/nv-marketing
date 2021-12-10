import Link from 'next/link';

import styles from '../../styles/header/MobileNavLinks.module.scss';

function MobileNavLinks({ hamburgerIsActive }) {
	return (
		<div
			className={
				hamburgerIsActive
					? `${styles.block} ${styles.block___fadeIn}`
					: `${styles.block} ${styles.block___fadeOut}`
			}
		>
			<Link href='/#recent_projects'>
				<a>Recent Projects</a>
			</Link>
			<Link href='/articles'>
				<a>Articles</a>
			</Link>
			<Link href='/contact'>
				<a>Contact</a>
			</Link>
		</div>
	);
}

export default MobileNavLinks;
