import Link from 'next/link';
import { links } from '../../data/NavLinks';

import styles from '../../styles/header/NavLinks.module.scss';

function NavLinks() {
	const linksData = links;

	return (
		<div className={styles.block}>
			{linksData.map((link) => {
				return (
					<Link key={link.id} href={link.url}>
						<a className={styles.block__link}>{link.name}</a>
					</Link>
				);
			})}
		</div>
	);
}

export default NavLinks;
