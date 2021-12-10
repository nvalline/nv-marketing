import Link from 'next/link';

import styles from '../../styles/footer/Links.module.scss';

function Links() {
	return (
		<div className={styles.links}>
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

export default Links;
