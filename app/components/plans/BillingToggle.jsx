'use client';

import { useBilling } from './BillingContext';

// Styles
import styles from '../../styles/components/plans/BillingToggle.module.scss';

export default function BillingToggle() {
	const { isAnnual, setIsAnnual } = useBilling();

	return (
		<section className={styles.billing_toggle}>
			<div className={styles.billing_toggle__wrapper}>
				<div className={styles.billing_toggle__controls}>
					<span
						className={`${styles.billing_toggle__label}${isAnnual ? ` ${styles['billing_toggle__label--inactive']}` : ''}`}
					>
						Monthly
					</span>
					<button
						className={`${styles.billing_toggle__track}${isAnnual ? ` ${styles['billing_toggle__track--annual']}` : ''}`}
						onClick={() => setIsAnnual((prev) => !prev)}
						role='switch'
						aria-checked={isAnnual}
						aria-label='Toggle billing period'
					>
						<span
							className={`${styles.billing_toggle__thumb}${isAnnual ? ` ${styles['billing_toggle__thumb--annual']}` : ''}`}
						/>
					</button>
					<span
						className={`${styles.billing_toggle__label}${!isAnnual ? ` ${styles['billing_toggle__label--inactive']}` : ''}`}
					>
						Annual
					</span>
				</div>
				<p
					className={`${styles.billing_toggle__savings}${isAnnual ? ` ${styles['billing_toggle__savings--visible']}` : ''}`}
					aria-live='polite'
				>
					2 months free
				</p>
			</div>
		</section>
	);
}
