import Button from '../misc/buttons';

import styles from '../../styles/hero/Hero.module.scss';

function Hero() {
	const handleBtnClick = () => {
		console.log('HERO BTN CLICKED');
	};

	return (
		<section className={styles.hero}>
			{/* Ellipses background image */}
			<div className={styles.hero__ellipses}></div>
			<div className={styles.hero__block}>
				<h1 className={styles.hero__title}>
					We help businesses <span>expand</span> their{' '}
					<span>digital presence</span>
				</h1>
				<p className={styles.hero__content}>
					We aide small businesses in growing their online presence by providing
					engaging website design & development and SEO strategies.
				</p>
				<Button
					type='button'
					className={styles.hero__button}
					onClick={handleBtnClick}
					text='learn more'
				/>
			</div>
		</section>
	);
}

export default Hero;
