import Image from 'next/image';
import logo from './logo_dark.png';

export default function Header() {
	return (
		<header>
			<div>
				<Image
					src={logo}
					alt='NV Marketing Logo'
					height={67}
					width={219}
					placeholder='blur'
					quality={100}
				/>
			</div>
		</header>
	);
}
