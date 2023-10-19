'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { contentContainer, heroContent, heroImg } from './MotionVars';
import webServices from './assets/web_services.png';

// Components
import PrimaryBtn from '../misc/PrimaryBtn';

// Styles
import styles from '../../styles/components/services/Hero.module.scss';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__wrapper}>
				{/* Headers */}
				<div className={styles.hero__headers}>
					<h1 className={styles.hero__header}>Elevate Your Online Presence</h1>
					<p className={styles.hero__sub_header}>
						A strong online presence is not just an option,{' '}
						<span>it&apos;s a necessity</span>
					</p>
				</div>
				<div className={styles.hero__block}>
					{/* Content */}
					<motion.div
						variants={contentContainer}
						initial='hidden'
						animate='show'
						className={styles.hero__content___block}
					>
						<motion.p
							variants={heroContent}
							className={styles.hero__content___text}
						>
							NV Marketing empowers businesses to rise above the digital noise
							and make a lasting impact. Whether you&apos;re looking to
							captivate your audience with stunning web design, turn your ideas
							into functional digital solutions, or enhance your visibility in
							the digital realm, NV Marketing is your trusted partner on this
							journey.
						</motion.p>
						<motion.p
							variants={heroContent}
							className={styles.hero__content___text}
						>
							Explore our array of services tailored to your unique needs, and
							let&apos;s{' '}
							<span>unlock your business&apos;s full online potential</span>{' '}
							together.
						</motion.p>
						<motion.div variants={heroContent}>
							<Link href={'/contact'}>
								<PrimaryBtn
									text='Schedule a Call Now'
									classname={styles.hero__btn}
								/>
							</Link>
						</motion.div>
					</motion.div>
					{/* Image */}
					<div className={styles.hero__img___block}>
						<motion.div
							variants={heroImg}
							initial='hidden'
							animate='show'
							className={styles.hero__img}
						>
							<Image
								src={webServices}
								alt='Web Services'
								fill
								sizes='(max-width: 859px) 272px, (max-width: 1023px) 372px, (max-width: 1439px) 450px, 630px'
								priority='true'
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
