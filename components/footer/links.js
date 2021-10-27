import Link from 'next/link';
import { links } from '../../data/NavLinks';

import styles from '../../styles/footer/Links.module.scss';

function Links() {
	const linksData = links;

	return (
		<div className={styles.links}>
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

export default Links;
