// Styles
import styles from '@/app/styles/components/home/Hero.module.scss';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div>
				{/* Content */}
				<div>
					<h1>
						Unleash Your <span>Business’s Potential</span>
					</h1>
					<p>
						Welcome to NV Marketing, where digital innovation meets
						affordability. We&apos;re on a mission to{' '}
						<span>empower small businesses</span> like yours with the online
						presence of giants.{' '}
					</p>
					<p>
						Our expertise <span>transforms your vision</span> into a stunning
						reality, all within the reach of your budget.
					</p>
					<button type='button'>Get In Touch</button>
				</div>
				{/* Image */}
				<div></div>
			</div>
		</section>
	);
}
