import Image from 'next/image';
import founderImg from './founder_at_desk.png';

// Styles
import styles from '../../styles/components/about/Bio.module.scss';

export default function Bio() {
	return (
		<section className={styles.bio}>
			<div className={styles.bio__wrapper}>
				{/* Mobile Bio */}
				<div className={styles.bio__mobile}>
					<div className={styles.bio__headers}>
						<h3 className={styles.bio__header}>
							Meet the Visionary Behind NV Marketing
						</h3>
						<p className={styles.bio__sub_header}>Nate Valline</p>
						<p className={styles.bio__sub_header}>Founder & CEO</p>
					</div>
					<div className={styles.bio__img___mobile}>
						<Image src={founderImg} alt='Founder & CEO' fill quality={100} />
					</div>
					<div className={styles.bio__content___block}>
						<p className={styles.bio__content}>
							Nate Valline is an industry veteran with a deep-rooted passion for
							web development and digital marketing. With a Masters degree in
							International Business from Macquarie University, a certificate in
							full-stack web development, and a rich background in the
							intermountain region, Nate has continually pushed the boundaries
							of what&apos;s possible in the digital landscape.
						</p>
						<p className={styles.bio__content}>
							Driven by a desire to empower small businesses, Nate embarked on
							the journey to establish NV Marketing, a company dedicated to
							delivering enterprise-quality web solutions tailored to small
							business budgets. Their vision? To bridge the gap between local
							charm and global reach, helping businesses thrive in the
							intermountain region and beyond.
						</p>
						<p className={styles.bio__content}>
							Nate&apos;s expertise in web development, SEO, and digital
							strategy has been pivotal in transforming countless businesses
							online. Their commitment to excellence, innovation, and results is
							the driving force behind NV Marketing&apos;s success.
						</p>
						<p className={styles.bio__content}>
							When not immersed in the digital world, you can find Nate enjoying
							riding bicycles, skiing, and playing in the many wonders of the
							rocky mountains and deserts in the region.
						</p>
					</div>
				</div>
				{/* Desktop Bio */}
				<div className={styles.bio__desktop}></div>
			</div>
		</section>
	);
}