import Image from 'next/image';
import rightLines from './assets/right_lines.png';

export default function RightLines() {
	return (
		<Image
			src={rightLines}
			alt='Line Accents'
			fill
			sizes='(max-width: 859px) 324px, (max-width: 1023px) 448px, 573px'
			quality={100}
		/>
	);
}
