'use client';

import Image from 'next/image';
import { urlFor } from '@/app/lib/sanity';
import { motion } from 'framer-motion';
import { serviceImage } from './MotionVars';

// Styles
import styles from '../../styles/components/services/ServiceContent.module.scss';

export default function ServiceContent({ name, description, image }) {
	const serviceImg = urlFor(image).url();

	return (
		<>
			{/* Image */}
			<motion.div
				variants={serviceImage}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
				className={styles.img__wrapper}
			>
				<Image src={serviceImg} alt={name} fill />
			</motion.div>
			{/* Content */}
			<div className={styles.content}>
				<h2 className={styles.content__header}>{name}</h2>
				{description.map((item) => {
					return (
						<p key={item._key} className={styles.content__text}>
							<span>{item.title}:</span> {item.content}
						</p>
					);
				})}
			</div>
		</>
	);
}
