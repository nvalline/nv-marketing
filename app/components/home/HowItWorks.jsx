'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// Components
import PrimaryBtn from '../misc/PrimaryBtn';

// Styles
import styles from '@/app/styles/components/home/HowItWorks.module.scss';

const steps = [
	{
		number: '01',
		title: 'Consult',
		description:
			'We start with a free strategy call to understand your business, goals, and target audience. No pressure. Just clarity on what will move the needle.'
	},
	{
		number: '02',
		title: 'Build',
		description:
			'Our team designs and develops a fast, conversion-focused website built around your brand and the keywords your customers actually search.'
	},
	{
		number: '03',
		title: 'Grow',
		description:
			'Ongoing SEO and support keep your site climbing the rankings and turning visitors into leads. Month after month.'
	}
];

export default function HowItWorks() {
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
					<h2 className={styles.how_it_works__heading}>How It Works</h2>
					<p className={styles.how_it_works__pricing}>
						Packages starting at <span>$150&nbsp;/&nbsp;month</span>
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
				<div className={styles.how_it_works__cta}>
					<Link href='/contact'>
						<PrimaryBtn text='Get a Free Consultation' />
					</Link>
				</div>
			</div>
		</section>
	);
}
