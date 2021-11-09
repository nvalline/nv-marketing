import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';

import Layout from '../../components/Layout';

export default function ArticlePage({
	frontmatter: { title, date, cover_img, excerpt },
	slug,
	content
}) {
	return (
		<section>
			<h3>{title}</h3>
			<div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>

			{/* Return to articles page */}
			<Link href='/articles'>
				<a>Go Back</a>
			</Link>
		</section>
	);
}

ArticlePage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export async function getStaticPaths() {
	// Get all article filenames
	const articlesDirectory = path.join(process.cwd(), '/data/articles');
	const filenames = fs.readdirSync(articlesDirectory);

	// Populate paths array with filename slugs
	const paths = filenames.map((filename) => ({
		params: {
			slug: filename.replace('.md', '')
		}
	}));

	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(
		path.join(process.cwd(), '/data/articles', slug + '.md'),
		'utf8'
	);

	const { data: frontmatter, content } = matter(markdownWithMeta);

	return {
		props: {
			frontmatter,
			slug,
			content
		}
	};
}
