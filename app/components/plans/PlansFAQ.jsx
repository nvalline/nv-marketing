// Styles
import styles from '../../styles/components/plans/PlansFAQ.module.scss';

const faqs = [
	{
		question: 'Do I have to sign a long-term contract?',
		answer:
			'All plans require a 12-month minimum commitment. This is because your build cost is included in the monthly fee rather than charged upfront. The 12-month term is what makes that model work for both of us. After the initial term, your plan continues month-to-month and can be cancelled at any time.'
	},
	{
		question: 'How long until my site is live?',
		answer:
			'It depends on the complexity of your project. A Tier 1 single-page site can typically go live in 1 to 2 weeks. A Tier 2 or Tier 3 site with multiple pages, custom features, or third-party integrations may take 2 to 4 weeks. The biggest factor on our end is how quickly we receive your content, images, and final approval. Clients who come prepared move fastest.'
	},
	{
		question: 'Do I own my website?',
		answer:
			'You own your domain and your content. The site is built and hosted under NV Marketing’s account for the duration of your plan. If you choose not to continue after your contract term, you can request the code files to take with you and host elsewhere.'
	},
	{
		question: 'What if I need more updates than my plan includes?',
		answer:
			'Each plan includes a monthly maintenance allowance: 1 hour for Essentials and Professional, 2 hours for Growth. If a request is going to exceed that allowance, we will let you know with an estimate before any additional work begins. Extra time is billed hourly and nothing proceeds without your approval.'
	},
	{
		question: 'Can I upgrade my plan as my business grows?',
		answer:
			'Yes. You can move up to a higher tier at any time during your contract. The new rate takes effect at your next billing cycle. Many clients start on Essentials to establish their online presence and upgrade to Professional once they are ready to focus on local SEO and lead generation.'
	}
];

export default function PlansFAQ() {
	return (
		<section className={styles.faq}>
			<div className={styles.faq__wrapper}>
				<h2 className={styles.faq__header}>Frequently asked questions</h2>
				<div className={styles.faq__list}>
					{faqs.map((item) => (
						<div key={item.question} className={styles.faq__item}>
							<h3 className={styles.faq__question}>{item.question}</h3>
							<p className={styles.faq__answer}>{item.answer}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
