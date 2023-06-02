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
			<Link href='/#recent_projects'>Recent Projects</Link>
			<Link href='/articles'>Articles</Link>
			<Link href='/contact'>Contact</Link>
		</div>
	);
}

export default MobileNavLinks;
