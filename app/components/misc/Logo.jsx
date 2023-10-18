import Image from 'next/image';
import Link from 'next/link';
import logo from './assets/logo_dark.png';

export default function Logo() {
	return (
		<>
			<Link href='/'>
				<Image src={logo} alt='NV Marketing Logo' fill quality={100} />
			</Link>
		</>
	);
}
