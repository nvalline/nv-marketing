'use client';

import { motion } from 'framer-motion';
import { serviceHeader, serviceVars } from './MotionVars';

// Components

// Styles
import styles from '../../styles/components/home/Services.module.scss';

export default function Services({ children }) {
	return (
		<section className={styles.services}>
			<div className={styles.services__wrapper}>
				<div className={styles.services__header___block}>
					<motion.h2
						variants={serviceHeader}
						initial='hidden'
						animate='show'
						className={styles.services__header}
					>
						Our Services, Your Success
					</motion.h2>
					<motion.p
						variants={serviceVars}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
						className={styles.services__sub_header}
					>
						We specialize in crafting custom web solutions that not only
						showcase the uniqueness of your business but also{' '}
						<span>drive results</span>.
					</motion.p>
				</div>
				<motion.div
					variants={serviceVars}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					className={styles.services__cards}
				>
					{children}
				</motion.div>
			</div>
		</section>
	);
}
