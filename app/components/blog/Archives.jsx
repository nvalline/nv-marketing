import { sanityClient } from '@/app/lib/sanity';

// Components
import PostCard from './PostCard';

// Styles
import styles from '../../styles/components/blog/Archives.module.scss';

const getPosts = async () => {
	const query = `*[_type == 'posts']{_id, coverImage, excerpt, slug, title}`;

	const data = await sanityClient.fetch(query);

	return data;
};

export default async function Archives() {
	const posts = await getPosts();

	return (
		<section className={styles.blog_archives}>
			<div className={styles.blog_archives__wrapper}>
				{posts.map((post) => {
					return (
						<PostCard
							key={post._id}
							coverImage={post.coverImage}
							excerpt={post.excerpt}
							slug={post.slug}
							title={post.title}
						/>
					);
				})}
			</div>
		</section>
	);
}
