import Link from 'next/link';
import { sanityClient } from '@/app/lib/sanity';

// Components
import PostCard from './PostCard';

// Styles
import styles from '../../styles/components/blog/Archives.module.scss';

const getPosts = async (categorySlug) => {
	const query = categorySlug
		? `*[_type == 'posts' && category->slug.current == $categorySlug]{_id, coverImage, excerpt, slug, title, "category": category->{title, slug}}`
		: `*[_type == 'posts']{_id, coverImage, excerpt, slug, title, "category": category->{title, slug}}`;

	return sanityClient.fetch(query, categorySlug ? { categorySlug } : {});
};

const getCategories = async () => {
	return sanityClient.fetch(`*[_type == 'category'] | order(title asc){_id, title, slug}`);
};

export default async function Archives({ categorySlug }) {
	const [posts, categories] = await Promise.all([getPosts(categorySlug), getCategories()]);

	return (
		<section className={styles.blog_archives}>
			{categories.length > 0 && (
				<div className={styles.blog_archives__filter}>
					<Link
						href='/blog'
						className={`${styles.blog_archives__filter_link} ${!categorySlug ? styles.blog_archives__filter_link___active : ''}`}
					>
						All
					</Link>
					{categories.map((cat) => (
						<Link
							key={cat._id}
							href={`/blog?category=${cat.slug.current}`}
							className={`${styles.blog_archives__filter_link} ${categorySlug === cat.slug.current ? styles.blog_archives__filter_link___active : ''}`}
						>
							{cat.title}
						</Link>
					))}
				</div>
			)}
			<div className={styles.blog_archives__wrapper}>
				{posts.map((post) => (
					<PostCard
						key={post._id}
						coverImage={post.coverImage}
						excerpt={post.excerpt}
						slug={post.slug}
						title={post.title}
						category={post.category}
					/>
				))}
			</div>
		</section>
	);
}
