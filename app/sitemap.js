import { sanityClient } from './lib/sanity';

const BASE_URL = 'https://nv-marketing.com';

async function getAllPosts() {
	return sanityClient.fetch(`*[_type == 'posts']{slug, _updatedAt}`);
}

async function getLatestUpdatedAt(type) {
	const date = await sanityClient.fetch(
		`*[_type == $type] | order(_updatedAt desc)[0]._updatedAt`,
		{ type }
	);
	return date ? new Date(date) : null;
}

export default async function sitemap() {
	const [posts, latestServiceDate] = await Promise.all([
		getAllPosts(),
		getLatestUpdatedAt('services')
	]);

	const latestPostDate = posts?.length
		? new Date(Math.max(...posts.map((p) => new Date(p._updatedAt).getTime())))
		: null;

	const postUrls = (posts ?? []).map((post) => ({
		url: `${BASE_URL}/blog/${post.slug.current}`,
		lastModified: new Date(post._updatedAt),
		changeFrequency: 'monthly',
		priority: 0.6
	}));

	return [
		{
			url: BASE_URL,
			changeFrequency: 'yearly',
			priority: 1
		},
		{
			url: `${BASE_URL}/about`,
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: `${BASE_URL}/services`,
			...(latestServiceDate && { lastModified: latestServiceDate }),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: `${BASE_URL}/plans`,
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: `${BASE_URL}/contact`,
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: `${BASE_URL}/terms`,
			changeFrequency: 'yearly',
			priority: 0.3
		},
		{
			url: `${BASE_URL}/privacy`,
			changeFrequency: 'yearly',
			priority: 0.3
		},
		{
			url: `${BASE_URL}/blog`,
			...(latestPostDate && { lastModified: latestPostDate }),
			changeFrequency: 'weekly',
			priority: 0.5
		},
		...postUrls
	];
}
