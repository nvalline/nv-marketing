import Link from 'next/link';

// Styles
import styles from '../../styles/components/footer/NavLinks.module.scss';

export default function NavLinks() {
	return (
		<>
			<ul className={styles.nav_links}>
				<Link href={'/'}>
					<li>Home</li>
				</Link>
				<Link href={'/about'}>
					<li>About</li>
				</Link>
				<Link href={'/services'}>
					<li>Services</li>
				</Link>
				<Link href={'/blog'}>
					<li>Blog</li>
				</Link>
				<Link href={'/contact'}>
					<li>Contact</li>
				</Link>
			</ul>
		</>
	);
}
