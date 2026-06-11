import { Fragment } from 'react';

// Styles
import styles from '../../styles/components/plans/PricingFootnotes.module.scss';

const footnotes = [
	'12-month minimum, then cancel anytime',
	'Upgrade a tier anytime as you grow',
	'Hosting, SSL & backups included at every tier'
];

export default function PricingFootnotes() {
	return (
		<section className={styles.pricing_footnotes}>
			<ul className={styles.pricing_footnotes__list}>
				{footnotes.map((note, index) => (
					<Fragment key={note}>
						{index > 0 && (
							<li
								className={styles.pricing_footnotes__divider}
								aria-hidden='true'
							/>
						)}
						<li className={styles.pricing_footnotes__item}>
							<span
								className={styles.pricing_footnotes__dot}
								aria-hidden='true'
							/>
							{note}
						</li>
					</Fragment>
				))}
			</ul>
		</section>
	);
}
