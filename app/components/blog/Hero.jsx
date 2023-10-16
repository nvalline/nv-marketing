'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroImgVars } from './MotionVars';
import heroImg from './puzzle_pieces.png';

// Styles
import styles from '../../styles/components/blog/Hero.module.scss';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__wrapper}>
				<div className={styles.hero__content}>
					<h1 className={styles.hero__header}>Welcome to Our Blog</h1>
					{/* Mobile Image */}
					<motion.div
						variants={heroImgVars}
						initial='hidden'
						animate='show'
						className={styles.hero__img___mobile}
					>
						<Image src={heroImg} alt='Puzzle Pieces' fill />
					</motion.div>
					<p className={styles.hero__text}>
						Dive into a world of insights, knowledge, and inspiration. Our blog
						archive is a treasure trove of articles, each crafted to empower,
						inform, and spark your curiosity.
					</p>
					<p className={styles.hero__text}>
						Whether you&apos;re here to explore industry trends, gain practical
						tips, or discover innovative solutions, you&apos;ve come to the
						right place. With a wide range of topics and expert perspectives,
						our blog is your go-to resource for staying informed in the digital
						age.
					</p>
					<p className={styles.hero__text}>
						So, take a moment to browse, and let your digital journey begin.
					</p>
				</div>
				{/* Desktop Image */}
				<motion.div
					variants={heroImgVars}
					initial='hidden'
					animate='show'
					className={styles.hero__img___desktop}
				>
					<Image src={heroImg} alt='Puzzle Pieces' fill />
				</motion.div>
			</div>
		</section>
	);
}
