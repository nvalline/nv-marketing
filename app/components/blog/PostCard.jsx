import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/app/lib/sanity';

// Styles
import styles from '../../styles/components/blog/PostCard.module.scss';

export default function PostCard({ coverImage, excerpt, slug, title }) {
	const postImage = urlFor(coverImage).url();

	return (
		<div className={styles.post_card}>
			<div className={styles.post_card__accent___upper}>
				<Image
					src={upperLeftCorner}
					alt='Corner Accent'
					height={48}
					width={48}
				/>
			</div>
			<Link href={`/blog/${slug.current}`}>
				<div className={styles.post_card__img}>
					<Image
						src={postImage}
						alt={title}
						fill
						sizes='(max-width: 1200px) 255px, (max-width: 1439px) 300px, 375px'
						quality={100}
					/>
				</div>
			</Link>
			<Link href={`/blog/${slug.current}`}>
				<h3 className={styles.post_card__title}>{title}</h3>
			</Link>
			<p className={styles.post_card__excerpt}>{excerpt}</p>
			<div className={styles.post_card__accent___lower}>
				<Image
					src={lowerRightCorner}
					alt='Corner Accent'
					height={48}
					width={48}
				/>
			</div>
		</div>
	);
}
