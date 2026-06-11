'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// Components
import PrimaryBtn from '../misc/PrimaryBtn';

// Styles
import styles from '../../styles/components/plans/PricingHero.module.scss';

const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function PricingHero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__wrapper}>
				<motion.p
					variants={fadeUp}
					initial='hidden'
					animate='show'
					className={styles.hero__eyebrow}
				>
					Website plans for Intermountain West small businesses
				</motion.p>
				<motion.h1
					variants={fadeUp}
					initial='hidden'
					animate='show'
					className={styles.hero__header}
				>
					Enterprise-quality websites, built for small business
				</motion.h1>
				<motion.p
					variants={fadeUp}
					initial='hidden'
					animate='show'
					className={styles.hero__sub_header}
				>
					Look legitimate with a <b>custom designed website</b>, win more local
					customers, and turn visitors into booked business, all at a
					small-business price. No bloated agency retainers.
				</motion.p>
				<motion.div
					variants={fadeUp}
					initial='hidden'
					animate='show'
					className={styles.hero__cta}
				>
					<Link href='/contact'>
						<PrimaryBtn text='Schedule a Free Call' />
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
