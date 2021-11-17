import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';

import Layout from '../../components/Layout';
import styles from '../../styles/articles/ArticlePage.module.scss';
import PixelBar from '../../components/misc/PixelBar';

export default function ArticlePage({
	frontmatter: { title, date, cover_img, excerpt },
	slug,
	content
}) {
	return (
		<>
			<Head>
				{/* Page Title */}
				<title>{title} | NV Marketing, LLC</title>
				{/* Page Description */}
				<meta name='description' content={excerpt} />
			</Head>
			<section className={styles.articlePage}>
				<div className={styles.articlePage__container}>
					<div className={styles.articlePage__imageWrapper}>
						{/* <Image
						src={cover_img}
						alt={title}
						className={styles.articlePage__image}
						layout='fill'
						objectFit='cover'
						priority
					/> */}
						<img
							src={cover_img}
							alt={title}
							className={styles.articlePage__image}
						/>
					</div>
					<div className={styles.articlePage__accentBlock}>
						<div className={styles.articlePage__block}>
							<h3 className={styles.articlePage__title}>{title}</h3>
							<div
								className={styles.articlePage__content}
								dangerouslySetInnerHTML={{ __html: marked(content) }}
							></div>

							{/* Return to articles page */}
							<Link href='/articles'>
								<a className={styles.articlePage__button}>go back</a>
							</Link>
						</div>
					</div>
				</div>
				<PixelBar />
			</section>
		</>
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
