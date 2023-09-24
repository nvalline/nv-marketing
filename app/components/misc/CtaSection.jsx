import { sanityClient } from '../../lib/sanity';

// Components
import Cta from './Cta';
import FullLinesLower from './FullLinesLower';
import FullLinesUpper from './FullLinesUpper';

const getCta = async () => {
	const query = `*[_type == 'callToActions']`;

	const data = await sanityClient.fetch(query);

	return data;
};

export default async function CtaSection() {
	const unfilteredCta = await getCta();

	return (
		<>
			<div className='fullAccentLines'>
				<FullLinesUpper />
			</div>
			<Cta unfilteredCta={unfilteredCta} />
			<div className='fullAccentLines'>
				<FullLinesLower />
			</div>
		</>
	);
}
