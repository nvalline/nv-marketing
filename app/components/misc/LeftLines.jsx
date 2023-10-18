import Image from 'next/image';
import leftLines from './assets/left_lines.png';

export default function LeftLines() {
	return <Image src={leftLines} alt='Line Accents' fill quality={100} />;
}
