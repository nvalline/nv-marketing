import { sanityClient } from '../../lib/sanity';

// Styles
import styles from '../../styles/components/about/Commitments.module.scss';

const getCommitments = async () => {
	const query = `*[_type == 'commitments'] | order(position asc)`;

	const data = await sanityClient.fetch(query);

	return data;
};

export default async function Commitments() {
	const commitments = await getCommitments();

	return (
		<section className={styles.commitments}>
			<div className={styles.commitments__wrapper}>
				<div className={styles.commitments__header___block}>
					<h2 className={styles.commitments__header}>Our Commitment to You</h2>
					<p className={styles.commitments__sub_header}>
						At NV Marketing, our clients are at the heart of everything we do.
						We are committed to your success, and we promise to uphold the
						following principles in our partnership with you:
					</p>
				</div>
				<div className={styles.commitments__list___block}>
					{commitments.map((commitment) => {
						return (
							<div
								key={commitment._id}
								className={styles.commitments__list___item}
							>
								<p className={styles.commitments__content}>
									<span className={styles.commitments__content___header}>
										{commitment.position}. {commitment.header}:
									</span>
									{commitment.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
