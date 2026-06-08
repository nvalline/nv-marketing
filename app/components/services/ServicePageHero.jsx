'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// Components
import PrimaryBtn from '../misc/PrimaryBtn';

// Styles
import styles from '../../styles/components/services/ServicePageHero.module.scss';

const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ServicePageHero({ heading, subheading }) {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__wrapper}>
				<motion.h1
					variants={fadeUp}
					initial='hidden'
					animate='show'
					className={styles.hero__header}
				>
					{heading}
				</motion.h1>
				<motion.p
					variants={fadeUp}
					initial='hidden'
					animate='show'
					className={styles.hero__sub_header}
				>
					{subheading}
				</motion.p>
				<motion.div variants={fadeUp} initial='hidden' animate='show' className={styles.hero__cta}>
					<Link href='/contact'>
						<PrimaryBtn text='Schedule a Free Call' />
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
