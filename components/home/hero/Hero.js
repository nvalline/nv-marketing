// import Image from 'next/image';
import Link from 'next/link';

import { ImageFillPriority } from '../../misc/Images';
import Button from '../../misc/Buttons';

import heroImg from '../../../public/images/consult.jpg';

import styles from '../../../styles/home/hero/Hero.module.scss';

function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__page_container}>
				{/* Ellipses background image */}
				<div className={styles.hero__ellipses}></div>

				{/* Hero content block */}
				<div className={styles.hero__block}>
					<h1 className={styles.hero__title}>
						We help businesses <span>expand</span> their{' '}
						<span>digital presence</span>
					</h1>
					<p className={styles.hero__content}>
						We aide small businesses in growing their online presence by
						providing engaging website design & development and SEO strategies
						to attract more customers and increase sales.
					</p>
					<Link href='/contact' passHref>
						<Button
							type='button'
							className={styles.hero__button}
							text='learn more'
						/>
					</Link>
				</div>

				{/* Hero Image */}
				<div className={styles.hero__imageWrapper}>
					<ImageFillPriority
						src={heroImg}
						alt='consult'
						className={styles.hero__image}
					/>
					{/* <Image
						src={heroImg}
						alt='consult'
						className={styles.hero__image}
						layout='fill'
						priority
					/> */}
					{/* <img src={heroImg.src} alt='consult' className={styles.hero__image} /> */}
				</div>
			</div>
		</section>
	);
}

export default Hero;
