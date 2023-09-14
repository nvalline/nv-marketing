import Image from 'next/image';
import fullLinesUpper from './full_lines_upper.png';

export default function FullLinesUpper() {
	return (
		<Image src={fullLinesUpper} alt='Full Accent Lines' fill quality={100} />
	);
}
