import Link from 'next/link';

import styles from '../../styles/header/NavLinks.module.scss';

function NavLinks() {
	return (
		<div className={styles.block}>
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

export default NavLinks;
