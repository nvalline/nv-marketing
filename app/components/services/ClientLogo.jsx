'use client';

import Image from 'next/image';
import { urlFor } from '@/app/lib/sanity';
import { motion } from 'framer-motion';
import { clientLogo } from './MotionVars';

export default function ClientLogo({
	className,
	clientName,
	height,
	image,
	url,
	width
}) {
	const logo = urlFor(image).url();
	return (
		<motion.div
			variants={clientLogo}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
		>
			<a
				href={url}
				target='_blank'
				rel='noopenner noreferrer'
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
		</motion.div>
	);
}
