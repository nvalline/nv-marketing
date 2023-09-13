import FullLinesLower from '../images/FullLinesLower';
import FullLinesUpper from '../images/FullLinesUpper';

export default function CallToAction() {
	return (
		<>
			<div className='fullAccentLines'>
				<FullLinesUpper />
			</div>
			<section>CTA</section>
			<div className='fullAccentLines'>
				<FullLinesLower />
			</div>
		</>
	);
}
