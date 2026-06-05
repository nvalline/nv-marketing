// Components
import Archives from '../components/blog/Archives';
import FullLinesLower from '../components/misc/FullLinesLower';
import Hero from '../components/blog/Hero';
import LeftLines from '../components/misc/LeftLines';

export const metadata = {
	title: 'Blog',
	description:
		'Web design, development, and SEO insights from NV Marketing — practical guides to help small businesses grow their online presence.',
	alternates: {
		canonical: '/blog'
	}
};

export default function Home() {
	return (
		<main>
			<div className='container'>
				<Hero />
				<div className='leftAccentLines'>
					<LeftLines />
				</div>
				<Archives />
				<div className='fullAccentLines'>
					<FullLinesLower />
				</div>
			</div>
		</main>
	);
}
