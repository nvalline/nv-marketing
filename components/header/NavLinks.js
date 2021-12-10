import Link from 'next/link';

import styles from '../../styles/header/NavLinks.module.scss';

function NavLinks() {
	return (
		<div className={styles.block}>
			<Link href='/#recent_projects'>
				<a className={styles.block__link}>Recent Projects</a>
			</Link>
			<Link href='/articles'>
				<a className={styles.block__link}>Articles</a>
			</Link>
			<Link href='/contact'>
				<a className={styles.block__link}>Contact</a>
			</Link>
		</div>
	);
}

export default NavLinks;
