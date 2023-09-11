import Image from 'next/image';
import { urlFor } from '@/app/lib/sanity';

export default function ServiceCard({ name, icon, excerpt }) {
	const serviceIcon = urlFor(icon).url();

	return (
		<div>
			<Image src={serviceIcon} alt='icon' width={50} height={50} />
			<h3>{name}</h3>
			<p>{excerpt}</p>
		</div>
	);
}
