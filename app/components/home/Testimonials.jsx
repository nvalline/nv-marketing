'use client';

import { motion } from 'framer-motion';

// Components
import TestimonialList from './TestimonialList';

// Styles
import styles from '../../styles/components/home/Testimonials.module.scss';

const testimonialVars = {
	hidden: {
		y: '5vh',
		opacity: 0
	},
	show: {
		y: 1,
		opacity: 1,
		transition: {
			delay: 0.3,
			ease: 'easeOut'
		}
	}
};

export default function Testimonials() {
	return (
		<section className={styles.testimonials}>
			<div className={styles.testimonials__wrapper}>
				<div className={styles.testimonials__header___block}>
					<motion.h2
						variants={testimonialVars}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
						className={styles.testimonials__header}
					>
						Words from Our Partners
					</motion.h2>
					<motion.p
						variants={testimonialVars}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
						className={styles.testimonials__sub_header}
					>
						Discover the Impact of NV Marketing through the Voices of Those
						We&apos;ve Helped.
					</motion.p>
					<motion.p
						variants={testimonialVars}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
						className={styles.testimonials__sub_header}
					>
						At NV Marketing, we measure our success by the success stories of
						our partners. Listen to the voices of businesses that have
						experienced the transformative power of our enterprise-level
						websites tailored for small business budgets. Their words stand as a
						testament to our commitment to{' '}
						<span>excellence, innovation, and growth</span>.
					</motion.p>
				</div>
				<motion.div
					variants={testimonialVars}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					className={styles.testimonials__card___block}
				>
					<TestimonialList />
				</motion.div>
			</div>
		</section>
	);
}
