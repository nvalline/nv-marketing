import Link from 'next/link';

import { ImageFillPriority } from '../misc/Images';

import styles from '../../styles/articles/ArticleCard.module.scss';

export default function ArticleCard({
	frontmatter: { title, date, excerpt, cover_img },
	slug
}) {
	return (
		<div className={styles.articleCard}>
			<div className={styles.articleCard__imageWrapper}>
				<ImageFillPriority
					src={cover_img}
					alt={title}
					className={styles.articleCard__image}
				/>
				{/* <Image
					src={cover_img}
					alt={title}
					className={styles.articleCard__image}
					layout='fill'
					priority
				/> */}
				{/* <img
					src={cover_img}
					alt={title}
					className={styles.articleCard__image}
				/> */}
			</div>
			<div className={styles.articleCard__content}>
				<h2 className={styles.articleCard__title}>{title}</h2>
				<p className={styles.articleCard__text}>{excerpt}</p>
				<Link href={`/articles/${slug}`}>
					<a className={styles.articleCard__button}>read more</a>
				</Link>
			</div>
		</div>
	);
}
