'use client';

import { motion } from 'framer-motion';

// Components
import ServiceList from './ServiceList';

// Styles
import styles from '../../styles/components/home/Services.module.scss';

const serviceVars = {
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

export default function Services({ services }) {
	return (
		<section className={styles.services}>
			<div className={styles.services__wrapper}>
				<div className={styles.services__header___block}>
					<motion.h2
						variants={serviceVars}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
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
					<ServiceList />
				</motion.div>
			</div>
		</section>
	);
}
