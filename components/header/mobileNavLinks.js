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
			<Link href='#'>
				<a>Recent Projects</a>
			</Link>
			<Link href='#'>
				<a>Articles</a>
			</Link>
			<Link href='#'>
				<a>Contact</a>
			</Link>
		</div>
	);
}

export default MobileNavLinks;
