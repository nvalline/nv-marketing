'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { addressBlock } from './MotionVars';
import phone from './assets/phone.png';
import email from './assets/email.png';

// Styles
import styles from '../../styles/components/contact/Hero.module.scss';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__wrapper}>
				{/* Address */}
				<motion.div
					variants={addressBlock}
					initial='hidden'
					animate='show'
					className={styles.hero__block}
				>
					<h2 className={styles.hero__title}>Home Base</h2>
					<div className={styles.hero__address}>
						<p className={styles.hero__contact_info}>Midway, UT</p>
						<div className={styles.hero__phone}>
							<Image src={phone} alt='phone' height={24} width={24} />
							<a href='tel:801-742-1290' className={styles.hero__contact_info}>
								(801) 742-1290
							</a>
						</div>
						<div className={styles.hero__email}>
							<Image src={email} alt='email' height={24} width={24} />
							<a
								href='mailto:contact@nv-marketing.com'
								className={styles.hero__contact_info}
							>
								contact@nv-marketing.com
							</a>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
