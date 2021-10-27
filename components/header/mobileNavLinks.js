import Link from 'next/link';
import { links } from '../../data/NavLinks';

import styles from '../../styles/header/MobileNavLinks.module.scss';

function MobileNavLinks({ hamburgerIsActive }) {
	const linksData = links;

	return (
		<div
			className={
				hamburgerIsActive
					? `${styles.block} ${styles.block___fadeIn}`
					: `${styles.block} ${styles.block___fadeOut}`
			}
		>
			{linksData.map((link) => {
				return (
					<Link key={link.id} href={link.url}>
						<a>{link.name}</a>
					</Link>
				);
			})}
		</div>
	);
}

export default MobileNavLinks;
