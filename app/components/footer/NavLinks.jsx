import Link from 'next/link';

// Styles
import styles from '../../styles/components/footer/NavLinks.module.scss';

export default function NavLinks() {
	return (
		<>
			<ul className={styles.nav_links}>
				<li>
					<Link href={'/'}>Home</Link>
				</li>
				<li>
					<Link href={'/about'}>About</Link>
				</li>
				<li>
					<Link href={'/services'}>Services</Link>
				</li>
				<li>
					<Link href={'/blog'}>Blog</Link>
				</li>
				<li>
					<Link href={'/contact'}>Contact</Link>
				</li>
			</ul>
		</>
	);
}
