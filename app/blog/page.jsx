// Components
import Archives from '../components/blog/Archives';
import FullLinesLower from '../components/misc/FullLinesLower';
import Hero from '../components/blog/Hero';
import LeftLines from '../components/misc/LeftLines';

export const metadata = {
	title: 'Blog',
	description:
		'NV Marketing believes in shared knowledge. This blog is to help educate to help make more informed decisions.'
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
