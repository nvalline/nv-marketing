import Image from 'next/image';
import Link from 'next/link';
import webServices from './web_services.png';

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
					<div className={styles.hero__content___block}>
						<p className={styles.hero__content___text}>
							NV Marketing empowers businesses to rise above the digital noise
							and make a lasting impact. Whether you&apos;re looking to
							captivate your audience with stunning web design, turn your ideas
							into functional digital solutions, or enhance your visibility in
							the digital realm, NV Marketing is your trusted partner on this
							journey.
						</p>
						<p className={styles.hero__content___text}>
							Explore our array of services tailored to your unique needs, and
							let&apos;s{' '}
							<span>unlock your business&apos;s full online potential</span>{' '}
							together.
						</p>
						<Link href={'/contact'}>
							<PrimaryBtn
								text='Schedule a Call Now'
								classname={styles.hero__btn}
							/>
						</Link>
					</div>
					{/* Image */}
					<div className={styles.hero__img___block}>
						<div className={styles.hero__img}>
							<Image src={webServices} alt='Web Services' fill />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
