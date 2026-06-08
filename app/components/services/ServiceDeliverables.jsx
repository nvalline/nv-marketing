// Styles
import styles from '../../styles/components/services/ServiceDeliverables.module.scss';

export default function ServiceDeliverables({ heading, items }) {
	return (
		<section className={styles.deliverables}>
			<div className={styles.deliverables__wrapper}>
				<h2 className={styles.deliverables__header}>{heading}</h2>
				<ul className={styles.deliverables__list}>
					{items.map((item, index) => (
						<li key={index} className={styles.deliverables__item}>
							<span className={styles.deliverables__check} aria-hidden='true'>✓</span>
							{item}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
