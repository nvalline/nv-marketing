import { contactDetails } from '../../../data/contactDetails';

import styles from '../../../styles/contact/details/Details.module.scss';

function Details() {
	const details = contactDetails;

	return (
		<div className={styles.details}>
			<div className={styles.details__block}>
				<h1 className={styles.details__title}>get in touch</h1>
				<hr className={styles.details__line} />
				{details.map((info) => {
					return (
						<div key={info.id}>
							<h3 className={styles.details__label}>telephone</h3>
							<h2 className={styles.details__info}>{info.phone}</h2>
							<h3 className={styles.details__label}>email</h3>
							<h2 className={styles.details__info}>{info.email}</h2>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Details;
