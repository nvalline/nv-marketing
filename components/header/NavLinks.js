import Link from 'next/link';

import styles from '../../styles/header/NavLinks.module.scss';

function NavLinks() {
	return (
		<div className={styles.block}>
			<Link href='/#recent_projects' className={styles.block__link}>
				Recent Projects
			</Link>
			<Link href='/articles' className={styles.block__link}>
				Articles
			</Link>
			<Link href='/contact' className={styles.block__link}>
				Contact
			</Link>
		</div>
	);
}

export default NavLinks;
