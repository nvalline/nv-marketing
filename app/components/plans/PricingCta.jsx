import Link from 'next/link';

// Components
import PrimaryBtn from '../misc/PrimaryBtn';

// Styles
import styles from '../../styles/components/plans/PricingCta.module.scss';

export default function PricingCta() {
	return (
		<section className={styles.cta}>
			<div className={styles.cta__wrapper}>
				<div className={styles.cta__content_block}>
					<h2 className={styles.cta__heading}>
						Ready to grow your business online?
					</h2>
					<p className={styles.cta__body}>
						Book a free strategy call. We&apos;ll map out the right plan for
						your business. No pressure, no jargon, no long-term contract.
					</p>
				</div>
				<Link href='/contact'>
					<PrimaryBtn text='Schedule Your Free Call' classname={styles.cta__btn} />
				</Link>
				<p className={styles.cta__secondary}>
					or call us directly at{' '}
					<a href='tel:+18017421290'>(801) 742-1290</a>
				</p>
			</div>
		</section>
	);
}
