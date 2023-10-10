'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import mainImg from './main_image.png';

// Components
import PrimaryBtn from '../misc/PrimaryBtn';

// Styles
import styles from '@/app/styles/components/home/Hero.module.scss';

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

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__wrapper}>
				{/* Content */}
				<motion.div
					variants={heroContainerVars}
					initial='hidden'
					animate='show'
					className={styles.hero__content}
				>
					<motion.h1 variants={heroContentVars} className={styles.hero__header}>
						Unleash Your <span>Business&apos;s Potential</span>
					</motion.h1>
					<motion.p
						variants={heroContentVars}
						className={styles.hero__sub_header}
					>
						Welcome to NV Marketing, where digital innovation meets
						affordability. We&apos;re on a mission to{' '}
						<span>empower small businesses</span> like yours with the online
						presence of giants.{' '}
					</motion.p>
					<motion.p
						variants={heroContentVars}
						className={styles.hero__sub_header}
					>
						Our expertise <span>transforms your vision</span> into a stunning
						reality, all within the reach of your budget.
					</motion.p>
					<motion.div variants={heroContentVars}>
						<Link href={'/contact'}>
							<PrimaryBtn text='Get In Touch' classname={styles.hero__btn} />
						</Link>
					</motion.div>
				</motion.div>
				{/* Image */}
				<motion.div
					initial={{ opacity: 0, scale: 0.75 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
					className={styles.hero__img}
				>
					<Image
						src={mainImg}
						alt='Web Design, Development, & SEO'
						height={507}
						width={422}
						style={{ maxWidth: '100%', height: 'auto' }}
					/>
				</motion.div>
			</div>
		</section>
	);
}
