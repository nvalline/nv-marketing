import Image from 'next/image';
import photo from './standing_image.png';

// Styles
import styles from '../../styles/components/home/ValueProps.module.scss';

export default function ValueProps() {
	return (
		<section className={styles.value_props}>
			<div className={styles.value_props__wrapper}>
				<div className={styles.value_props__img___block}>
					<Image
						src={photo}
						alt='NV Marketing Web Developer'
						fill
						quality={100}
					/>
				</div>
				<div
					className={`${styles.value_props__cells} ${styles.value_props__texture___bg}`}
				>
					<h4 className={styles.value_props__header}>
						Why Choose NV Marketing?
					</h4>
				</div>
				<div
					className={`${styles.value_props__cells} ${styles.value_props__props}`}
				>
					<h4>Enterprise Impact, Small Business Values</h4>
					<p>
						Unlock enterprise-quality websites that captivate your audience and
						drive growth. We specialize in delivering premium solutions at small
						business-friendly prices.
					</p>
				</div>
				<div
					className={`${styles.value_props__cells} ${styles.value_props__props}`}
				>
					<h4>Rooted in the Rockies, Connecting the World</h4>
					<p>
						From the picturesque Intermountain region to the global stage,
						we&apos;re your bridge to a worldwide audience. Our local roots
						ensure that your online strategy resonates across continents.
					</p>
				</div>
				<div
					className={`${styles.value_props__cells} ${styles.value_props__props}`}
				>
					<h4>Innovate. Collaborate. Succeed.</h4>
					<p>
						Join hands with a team that thrives on collaboration and innovation.
						We&apos;re not just web developers; we&apos;re your partners in
						propelling your business forward.
					</p>
				</div>
			</div>
		</section>
	);
}
