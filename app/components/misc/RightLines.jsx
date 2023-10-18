import Image from 'next/image';
import rightLines from './assets/right_lines.png';

export default function RightLines() {
	return <Image src={rightLines} alt='Line Accents' fill quality={100} />;
}
