'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import largeMap from './map_lg.png';
import smallMap from './map_sm.png';

// Styles
import styles from '../../styles/components/about/Hero.module.scss';

const heroImgVars = {
	hidden: {
		x: '5vw',
		y: '5vh',
		opacity: 0,
		scale: 0.75
	},
	show: {
		x: 1,
		y: 1,
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			ease: 'easeOut'
		}
	}
};

const heroContainerVars = {
	hidden: {
		opacity: 0
	},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.09,
			staggerDirection: 1
		}
	}
};

const heroContentVars = {
	hidden: {
		opacity: 0,
		y: '5vh'
	},
	show: {
		opacity: 1,
		y: 1,
		transition: {
			duration: 0.5,
			ease: 'easeInOut'
		}
	}
};

const descVars = {
	hidden: {
		opacity: 0,
		scale: 0.75
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			delay: 0.5,
			duration: 0.5,
			ease: 'easeOut'
		}
	}
};

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__wrapper}>
				{/* Content */}
				<div className={styles.hero__title___block}>
					{/* Headers */}
					<motion.div
						variants={heroContainerVars}
						initial='hidden'
						animate='show'
						className={styles.hero__content___headers}
					>
						<motion.h1
							variants={heroContentVars}
							className={styles.hero__content___header}
						>
							Discover NV Marketing: <span>Your Digital Success Partner</span>
						</motion.h1>
						<motion.p
							variants={heroContentVars}
							className={styles.hero__content___sub_header}
						>
							Unleash Your Business&apos;s Potential in the Digital Frontier
						</motion.p>
					</motion.div>
					{/* Hero Image */}
					<div className={styles.hero__img___block}>
						{/* Mobile Image */}
						<div className={styles.hero__img___mobile}>
							<Image src={smallMap} alt='Service Map' fill />
						</div>
						{/* Desktop Image */}
						<motion.div
							variants={heroImgVars}
							initial='hidden'
							animate='show'
							className={styles.hero__img___desktop}
						>
							<Image src={largeMap} alt='Service Map' fill />
						</motion.div>
					</div>
				</div>
				{/* Hero Impact Section */}
				<motion.div
					variants={descVars}
					initial='hidden'
					animate='show'
					className={styles.hero__impact___block}
				>
					<h2 className={styles.hero__impact___header}>
						NV Marketing: Where Small Business Meets Big Impact
					</h2>
					<p className={styles.hero__impact___content}>
						At NV Marketing, our mission is to empower small businesses with the
						digital tools they need to thrive in an ever-evolving online
						landscape. We&apos;re committed to delivering enterprise-quality web
						solutions that don&apos;t break the bank, making digital excellence
						accessible to businesses of all sizes.
					</p>
					<p className={styles.hero__impact___content}>
						With our deep understanding of the Intermountain region and a global
						perspective, we bridge the gap between local charm and worldwide
						reach.
					</p>
					<p className={styles.hero__impact___content}>
						Our passion lies in partnering with our clients to unlock their full
						potential, innovate fearlessly, and propel their businesses to new
						heights. We measure our success by the success stories of the
						businesses we serve, and we&apos;re dedicated to building lasting
						relationships grounded in{' '}
						<span>trust, creativity, and results</span>.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
