// Styles
import styles from '@/app/styles/components/home/Hero.module.scss';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__wrapper}>
				{/* Content */}
				<div className={styles.hero__content}>
					<h1 className={styles.hero__header}>
						Unleash Your <span>Business&apos;s Potential</span>
					</h1>
					<p className={styles.hero__sub_header}>
						Welcome to NV Marketing, where digital innovation meets
						affordability. We&apos;re on a mission to{' '}
						<span>empower small businesses</span> like yours with the online
						presence of giants.{' '}
					</p>
					<p className={styles.hero__sub_header}>
						Our expertise <span>transforms your vision</span> into a stunning
						reality, all within the reach of your budget.
					</p>
					<button type='button' className={styles.hero__btn}>
						Get In Touch
					</button>
				</div>
				{/* Image */}
				<div className={styles.hero__img}></div>
			</div>
		</section>
	);
}
