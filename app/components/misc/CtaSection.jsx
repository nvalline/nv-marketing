// Components
import FullLinesLower from './FullLinesLower';
import FullLinesUpper from './FullLinesUpper';
import Cta from './Cta';

export default function CtaSection() {
	return (
		<>
			<div className='fullAccentLines'>
				<FullLinesUpper />
			</div>
			<Cta page='home' />
			<div className='fullAccentLines'>
				<FullLinesLower />
			</div>
		</>
	);
}
