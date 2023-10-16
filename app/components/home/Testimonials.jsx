'use client';

import { motion } from 'framer-motion';
import { testimonialVars } from './MotionVars';

// Styles
import styles from '../../styles/components/home/Testimonials.module.scss';

export default function Testimonials({ children }) {
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
					{children}
				</motion.div>
			</div>
		</section>
	);
}
