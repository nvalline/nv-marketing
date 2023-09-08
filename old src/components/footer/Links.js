import Link from 'next/link';

import styles from '../../styles/footer/Links.module.scss';

function Links() {
	return (
		<div className={styles.links}>
			<Link href='/#recent_projects'>Recent Projects</Link>
			<Link href='/articles'>Articles</Link>
			<Link href='/contact'>Contact</Link>
		</div>
	);
}

export default Links;
