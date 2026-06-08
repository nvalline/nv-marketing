'use client';

import { useEffect, useRef, useState } from 'react';

// Styles
import styles from '../../styles/components/services/ServiceProcess.module.scss';

export default function ServiceProcess({ heading, steps }) {
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
		<section className={styles.process}>
			<div className={styles.process__wrapper}>
				<h2 className={styles.process__header}>{heading}</h2>
				<ol ref={stepsRef} className={styles.process__steps}>
					{steps.map((step, index) => (
						<li
							key={step.number}
							className={`${styles.process__step}${isVisible ? ` ${styles['process__step--visible']}` : ''}`}
							style={{ transitionDelay: isVisible ? `${index * 0.2}s` : '0s' }}
						>
							<span className={styles.process__step_number}>{step.number}</span>
							<h3 className={styles.process__step_title}>{step.title}</h3>
							<p className={styles.process__step_desc}>{step.description}</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
