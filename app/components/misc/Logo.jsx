import Image from 'next/image';
import Link from 'next/link';
import logo from './assets/logo_dark.png';

export default function Logo() {
	return (
		<Link
			href='/'
			style={{ position: 'relative', display: 'block', height: '100%', width: '100%' }}
		>
			<Image
				src={logo}
				alt='NV Marketing Logo'
				fill
				sizes='(max-width: 1023px) 152px, 219px'
				quality={100}
				priority
			/>
		</Link>
	);
}
