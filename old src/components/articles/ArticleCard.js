import Link from 'next/link';

import { ImageFillPriority } from '../misc/Images';

import styles from '../../styles/articles/ArticleCard.module.scss';

export default function ArticleCard({
	frontmatter: { title, date, excerpt, cover_img, img_blur },
	slug
}) {
	return (
		<div className={styles.articleCard}>
			{/* Article Image */}
			<div className={styles.articleCard__imageWrapper}>
				<ImageFillPriority
					src={cover_img}
					alt={title}
					placeholder='blur'
					blurDataURL={img_blur}
					className={styles.articleCard__image}
				/>
			</div>

			{/* Article Content */}
			<div className={styles.articleCard__content}>
				<h2 className={styles.articleCard__title}>{title}</h2>
				<p className={styles.articleCard__text}>{excerpt}</p>

				{/* Link to Article */}
				<Link href={`/articles/${slug}`} className={styles.articleCard__button}>
					read more
				</Link>
			</div>
		</div>
	);
}
