import Image from 'next/image';
import phone from './phone.png';

// Styles
import styles from '../../styles/components/contact/Hero.module.scss';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__wrapper}>
				{/* Address */}
				<div className={styles.hero__block}>
					<h2 className={styles.hero__title}>Home Base</h2>
					<div className={styles.hero__address}>
						<p className={styles.hero__contact_info}>Midway, UT</p>
						<div className={styles.hero__phone}>
							<Image src={phone} alt='phone' height={24} width={24} />
							<a href='tel:801-742-1290' className={styles.hero__contact_info}>
								(801) 742-1290
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
