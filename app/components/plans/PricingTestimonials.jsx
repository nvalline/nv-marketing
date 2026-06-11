'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import starImg from '../home/assets/star.png';

// Styles
import styles from '../../styles/components/plans/PricingTestimonials.module.scss';

const reviews = [
	{
		quote:
			'"I had Nate build me a website for my painting and drywall business. He did a fantastic job creating a site that reflects my vision. He set up a lot of extra tools and walked me through how to use them. He was very professional with great communication the whole way. I\'ll definitely keep using Nate\'s services."',
		name: 'Connor Z.',
		title: 'Owner, High Mountain Home Professionals'
	},
	{
		quote:
			'"I am so pleased with NV Marketing. Nate listened carefully and really understood my needs, then created a beautiful website that worked seamlessly from the moment it went live. Highly recommend his web design services. He\'s also great with practical sales and marketing advice."',
		name: 'Carrie P.',
		title: 'Owner, Elevated Barre Studio'
	}
];

const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function PricingTestimonials() {
	return (
		<section className={styles.testimonials}>
			<div className={styles.testimonials__wrapper}>
				<div className={styles.testimonials__header_block}>
					<motion.h2
						variants={fadeUp}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
						className={styles.testimonials__heading}
					>
						Trusted by Intermountain West small businesses
					</motion.h2>
					<motion.p
						variants={fadeUp}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
						className={styles.testimonials__subheading}
					>
						Enterprise impact, small-business values, rooted right here in the
						Intermountain West.
					</motion.p>
				</div>
				<motion.div
					variants={fadeUp}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					className={styles.testimonials__cards}
				>
					{reviews.map((review) => (
						<div key={review.name} className={styles.testimonials__card}>
							<div className={styles.testimonials__stars}>
								{Array.from({ length: 5 }).map((_, i) => (
									<Image
										key={i}
										src={starImg}
										alt='Star'
										height={20}
										width={20}
										quality={100}
									/>
								))}
							</div>
							<p className={styles.testimonials__quote}>{review.quote}</p>
							<cite className={styles.testimonials__author}>{review.name}</cite>
							<p className={styles.testimonials__title}>{review.title}</p>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
