// Styles
import styles from '../../styles/components/services/ServiceFAQ.module.scss';

export default function ServiceFAQ({ heading, items }) {
	return (
		<section className={styles.faq}>
			<div className={styles.faq__wrapper}>
				<h2 className={styles.faq__header}>{heading}</h2>
				<div className={styles.faq__list}>
					{items.map((item, index) => (
						<div key={index} className={styles.faq__item}>
							<h3 className={styles.faq__question}>{item.question}</h3>
							<p className={styles.faq__answer}>{item.answer}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
