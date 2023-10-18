import Image from 'next/image';
import fullLinesLower from './assets/full_lines_lower.png';

export default function FullLinesLower() {
	return (
		<Image src={fullLinesLower} alt='Full Accent Lines' fill quality={100} />
	);
}
