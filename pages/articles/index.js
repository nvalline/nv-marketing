import Head from 'next/head';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Layout from '../../components/Layout';
import ArticleCard from '../../components/articles/ArticleCard';

import styles from '../../styles/articles/Index.module.scss';

export default function Articles({ articles }) {
	return (
		<>
			<Head>
				{/* Page Title */}
				<title>Articles | NV Marketing, LLC</title>
				{/* Page Description */}
				<meta
					name='description'
					content='A collection of articles written by NV Marketing, LLC to aid small businesses in better understanding website development.'
				/>
				<meta
					name='keywords'
					content='website design, website development, seo, digital presence, design agency, freelance, web builder, small business website'
				/>
			</Head>
			<section className={styles.articles}>
				<div className={styles.articles__container}>
					{/* Ellipses background image */}
					<div className={styles.articles__ellipses}></div>

					{/* Article Preview */}
					<div className={styles.articles__block}>
						{articles.map((article, index) => {
							return <ArticleCard key={index} {...article} />;
						})}
					</div>
				</div>
			</section>
		</>
	);
}

Articles.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
	// Get all article filenames
	const articlesDirectory = path.join(process.cwd(), '/data/articles');
	const filenames = await fs.readdir(articlesDirectory);

	// Get slug and frontmatter from articles
	const articles = filenames.map(async (filename) => {
		// Create slug
		const slug = filename.replace('.md', '');

		// Get front matter
		const filePath = path.join(articlesDirectory, filename);
		const fileContent = await fs.readFile(filePath, 'utf8');

		const { data: frontmatter } = matter(fileContent);

		return {
			slug,
			frontmatter
		};
	});

	return {
		props: {
			articles: await Promise.all(articles)
		}
	};
}
