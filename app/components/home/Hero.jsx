import Image from 'next/image';
import Link from 'next/link';
import mainImg from './main_image.png';

// Components
import PrimaryBtn from '../misc/PrimaryBtn';

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
					<Link href={'/contact'}>
						<PrimaryBtn text='Get In Touch' classname={styles.hero__btn} />
					</Link>
				</div>
				{/* Image */}
				<div className={styles.hero__img}>
					<Image
						src={mainImg}
						alt='Web Design, Development, & SEO'
						height={507}
						width={422}
						style={{ maxWidth: '100%', height: 'auto' }}
					/>
				</div>
			</div>
		</section>
	);
}
