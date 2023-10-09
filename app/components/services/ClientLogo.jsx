import Image from 'next/image';
import { urlFor } from '@/app/lib/sanity';

export default function ClientLogo({
	className,
	clientName,
	height,
	image,
	key,
	url,
	width
}) {
	const logo = urlFor(image).url();
	return (
		<a
			href={url}
			target='_blank'
			rel='noopenner noreferrer'
			key={key}
			className={className}
		>
			<Image
				src={logo}
				alt={clientName}
				height={height}
				width={width}
				quality={100}
				style={{ maxWidth: '100%', height: 'auto' }}
			/>
		</a>
	);
}
