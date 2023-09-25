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
		<a href={url} target='_blank' rel='noopenner noreferrer' key={key}>
			<Image
				src={logo}
				alt={clientName}
				height={height}
				width={width}
				quality={100}
				className={className}
			/>
		</a>
	);
}
