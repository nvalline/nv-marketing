import Image from 'next/image';
import Link from 'next/link';
import { sanityClient, urlFor } from '@/app/lib/sanity';
import { PortableText } from '@portabletext/react';

// Components
import FullLinesLower from '@/app/components/misc/FullLinesLower';
import PrimaryBtn from '@/app/components/misc/PrimaryBtn';
import RightLines from '@/app/components/misc/RightLines';
import SecondaryBtn from '@/app/components/misc/SecondaryBtn';

// Styles
import styles from '../../styles/components/blog/PostPage.module.scss';

export const metadata = {
	title: `NV Marketing | Post`,
	description:
		'NV Marketing provides enterprise website services for the local budget.'
};

const getPost = async (slug) => {
	const query = `*[_type == 'posts' && slug.current == '${slug}']{_id, author, content, coverImage, date, title}`;

	const data = await sanityClient.fetch(query);

	return data[0];
};

function formatDate(inputDate) {
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	const dateParts = inputDate.split('-');
	const year = dateParts[0];
	const month = months[parseInt(dateParts[1], 10) - 1];
	const day = dateParts[2];

	return `${month}. ${parseInt(day, 10)}, ${year}`;
}

export default async function page({ params }) {
	const post = await getPost(params.slug);
	const postImage = urlFor(post.coverImage).url();

	const inputDate = post.date;
	const formattedDate = formatDate(inputDate);

	return (
		<main>
			<div className='container'>
				<section className={styles.hero}>
					<div className={styles.hero__wrapper}>
						<Image
							src={postImage}
							alt={post.title}
							sizes='90vw'
							height={347}
							width={520}
							quality={100}
							style={{
								margin: '0 auto',
								maxWidth: '100%',
								height: 'auto',
								borderRadius: '10px'
							}}
						/>
						<h1 className={styles.hero__title}>{post.title}</h1>
					</div>
				</section>
				<div className='rightAccentBlock'>
					<div className='rightAccentLines'>
						<RightLines />
					</div>
				</div>
				<section className={styles.post}>
					<article className={styles.post__article}>
						<PortableText value={post.content} />
						<div className={styles.post__details}>
							<p className={styles.post__date}>{formattedDate}</p>
							<p className={styles.post__author}>{post.author}</p>
						</div>
					</article>
					<div className={styles.post__btns}>
						<Link href={'/'}>
							<PrimaryBtn
								text='Return Home'
								classname={styles.post__btn___primary}
							/>
						</Link>
						<Link href={'/blog'}>
							<SecondaryBtn
								text='Read more Posts'
								classname={styles.post__btn___secondary}
							/>
						</Link>
					</div>
				</section>
				<div className='fullAccentLines'>
					<FullLinesLower />
				</div>
			</div>
		</main>
	);
}
