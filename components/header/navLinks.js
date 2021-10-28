import Link from 'next/link';

import styles from '../../styles/header/NavLinks.module.scss';

function NavLinks() {
	return (
		<div className={styles.block}>
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

export default NavLinks;
