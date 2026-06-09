import Link from 'next/link';
import styles from '@/app/styles/components/blog/AuthorBio.module.scss';

export default function AuthorBio({ author }) {
	return (
		<div className={styles.author_bio}>
			<div className={styles.author_bio__wrapper}>
				<p className={styles.author_bio__name}>{author.name}</p>
				<p className={styles.author_bio__credentials}>
					{author.bio || 'A guest contributor to the NV Marketing blog.'}
				</p>
				{author.url && (
					<Link href={author.url} className={styles.author_bio__link}>
						About {author.name}
					</Link>
				)}
			</div>
		</div>
	);
}
