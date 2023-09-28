import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/app/lib/sanity';
import lowerRightCorner from '../home/bottom_right_corner.png';
import upperLeftCorner from '../home/upper_left_corner.png';

// Styles
import styles from '../../styles/components/blog/PostCard.module.scss';

export default function PostCard({ coverImage, excerpt, slug, title }) {
	const postImage = urlFor(coverImage).url();
	const postUrl = `/${slug}`;

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
				<Image
					src={postImage}
					alt={title}
					height={250}
					width={375}
					quality={100}
					style={{ maxWidth: '100%', height: 'auto' }}
				/>
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
