'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { heroContainerVars, heroContentVars, heroImg } from './MotionVars';
import mainImg from './assets/main_image.png';

// Components
import PrimaryBtn from '../misc/PrimaryBtn';

// Styles
import styles from '@/app/styles/components/home/Hero.module.scss';

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
						Web Design, Development &amp; SEO for <span>Small Businesses</span>{' '}
						in the Intermountain West
					</motion.h1>
					<motion.p
						variants={heroContentVars}
						className={styles.hero__sub_header}
					>
						<span>Unleash your business&apos;s potential</span>. NV Marketing
						delivers enterprise-quality websites and organic growth strategies
						built for small businesses, all within the reach of your budget.
					</motion.p>
					<motion.div variants={heroContentVars}>
						<Link href={'/contact'}>
							<PrimaryBtn text='Get In Touch' classname={styles.hero__btn} />
						</Link>
					</motion.div>
				</motion.div>
				{/* Image */}
				<motion.div
					variants={heroImg}
					initial='hidden'
					animate='show'
					className={styles.hero__img}
				>
					<Image
						src={mainImg}
						alt='Web Design, Development, & SEO'
						height={507}
						width={422}
						// style={{ width: '100%', height: 'auto' }}
						priority='true'
					/>
				</motion.div>
			</div>
		</section>
	);
}
