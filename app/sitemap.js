import { sanityClient } from './lib/sanity';

const getAllPosts = async () => {
	const query = `*[_type == 'posts']{slug}`;

	const data = await sanityClient.fetch(query);

	return data;
};

export default async function sitemap() {
	const baseUrl = 'https://nv-merkting.com';

	const posts = await getAllPosts();

	const postUrls =
		posts?.map((post) => {
			return {
				url: `${baseUrl}/blog/${post.slug.current}`,
				lastModified: new Date()
			};
		}) ?? [];

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: `${baseUrl}/services`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5
		},
		...postUrls
	];
}
