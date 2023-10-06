import Image from 'next/image';
import largeMap from './map_lg.png';
import smallMap from './map_sm.png';

// Styles
import styles from '../../styles/components/about/Hero.module.scss';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__wrapper}>
				{/* Content */}
				<div className={styles.hero__title___block}>
					{/* Headers */}
					<div className={styles.hero__content___headers}>
						<h1 className={styles.hero__content___header}>
							Discover NV Marketing: <span>Your Digital Success Partner</span>
						</h1>
						<p className={styles.hero__content___sub_header}>
							Unleash Your Business&apos;s Potential in the Digital Frontier
						</p>
					</div>
					{/* Hero Image */}
					<div className={styles.hero__img___block}>
						{/* Mobile Image */}
						<div className={styles.hero__img___mobile}>
							<Image src={smallMap} alt='Service Map' fill />
						</div>
						{/* Desktop Image */}
						<div className={styles.hero__img___desktop}>
							<Image src={largeMap} alt='Service Map' fill />
						</div>
					</div>
				</div>
				{/* Hero Impact Section */}
				<div className={styles.hero__impact___block}>
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
				</div>
			</div>
		</section>
	);
}
