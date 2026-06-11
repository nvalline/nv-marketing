'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';

// Styles
import styles from '../../styles/components/plans/TrustBar.module.scss';

const items = [
	'Live in 1 to 4 weeks*',
	'Transparent pricing, no hidden fees',
	'Hosting, SSL & backups included'
];

const fadeUp = {
	hidden: { opacity: 0, y: 12 },
	show: (i) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, delay: i * 0.1 }
	})
};

export default function TrustBar() {
	return (
		<section className={styles.trust_bar}>
			<div className={styles.trust_bar__wrapper}>
				{items.map((item, index) => (
					<Fragment key={item}>
						{index > 0 && (
							<span
								className={styles.trust_bar__divider}
								aria-hidden='true'
							/>
						)}
						<motion.div
							custom={index}
							variants={fadeUp}
							initial='hidden'
							animate='show'
							className={styles.trust_bar__item}
						>
							<span className={styles.trust_bar__check} aria-hidden='true'>
								✓
							</span>
							<p className={styles.trust_bar__text}>{item}</p>
						</motion.div>
					</Fragment>
				))}
			</div>
		</section>
	);
}
