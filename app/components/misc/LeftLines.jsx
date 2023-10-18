import Image from 'next/image';
import leftLines from './assets/left_lines.png';

export default function LeftLines() {
	return (
		<Image
			src={leftLines}
			alt='Line Accents'
			fill
			sizes='(max-width: 859px) 100vw, (max-width: 1023px) 586px, 721px'
			quality={100}
		/>
	);
}
