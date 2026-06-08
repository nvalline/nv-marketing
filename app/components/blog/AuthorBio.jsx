import Link from 'next/link';
import styles from '@/app/styles/components/blog/AuthorBio.module.scss';

export default function AuthorBio() {
	return (
		<div className={styles.author_bio}>
			<div className={styles.author_bio__wrapper}>
				<p className={styles.author_bio__name}>Nate Valline</p>
				<p className={styles.author_bio__credentials}>
					Web developer and digital marketing consultant with 10+ years of
					experience helping small businesses grow their online presence through
					strategy-driven websites and SEO.
				</p>
				<Link href='/about' className={styles.author_bio__link}>
					About Nate
				</Link>
			</div>
		</div>
	);
}
