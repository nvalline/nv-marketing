import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

import styles from '../../styles/articles/Index.module.scss';

export default function Index({ articles }) {
	return (
		<section className={styles.articles}>
			<div className={styles.articles__container}>
				{/* Ellipses background image */}
				<div className={styles.articles__ellipses}></div>

				{/* Article Preview */}
				<div>
					{articles.map((article) => {
						return <h3>{article.frontmatter.title}</h3>;
					})}
				</div>
			</div>
		</section>
	);
}

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
