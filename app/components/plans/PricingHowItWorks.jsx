'use client';

import { useEffect, useRef, useState } from 'react';

// Styles
import styles from '../../styles/components/plans/PricingHowItWorks.module.scss';

const steps = [
	{
		number: '01',
		title: 'Consult',
		description:
			'We start with a free strategy call to understand your business, your services, and the customers you want to reach. No pressure, just clarity.'
	},
	{
		number: '02',
		title: 'Build',
		description:
			'We design and develop a fast, conversion-focused site built around your brand and the keywords your customers actually search for.'
	},
	{
		number: '03',
		title: 'Grow',
		description:
			'Ongoing updates, SEO, and support keep your site climbing the rankings and turning local visitors into new customers, month after month.'
	}
];

export default function PricingHowItWorks() {
	const [isVisible, setIsVisible] = useState(false);
	const stepsRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (stepsRef.current) observer.observe(stepsRef.current);

		return () => observer.disconnect();
	}, []);

	return (
		<section className={styles.how_it_works}>
			<div className={styles.how_it_works__wrapper}>
				<div className={styles.how_it_works__header_block}>
					<h2 className={styles.how_it_works__heading}>How it works</h2>
					<p className={styles.how_it_works__subheading}>
						From a free strategy call to a site that brings in leads, usually
						live in 1 to 4 weeks.
					</p>
				</div>
				<ol ref={stepsRef} className={styles.how_it_works__steps}>
					{steps.map((step, index) => (
						<li
							key={step.number}
							className={`${styles.how_it_works__step}${isVisible ? ` ${styles['how_it_works__step--visible']}` : ''}`}
							style={{ transitionDelay: isVisible ? `${index * 0.2}s` : '0s' }}
						>
							<span className={styles.how_it_works__step_number}>
								{step.number}
							</span>
							<h3 className={styles.how_it_works__step_title}>{step.title}</h3>
							<p className={styles.how_it_works__step_desc}>
								{step.description}
							</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
