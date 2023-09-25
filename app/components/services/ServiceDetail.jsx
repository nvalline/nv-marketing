import { sanityClient } from '../../lib/sanity';

// Components
import ServiceContent from './ServiceContent';

// Styles
import styles from '../../styles/components/services/ServiceDetail.module.scss';

const getService = async (query) => {
	const data = await sanityClient.fetch(query);

	return data;
};

export default async function ServiceDetail({ query }) {
	const service = await getService(query);

	const serviceTitle = service.title;
	const serviceDesc = service.description;
	const serviceImg = service.image;

	return (
		<section className={styles.service_detail}>
			<div className={styles.service_detail__wrapper}>
				<ServiceContent
					name={serviceTitle}
					description={serviceDesc}
					image={serviceImg}
				/>
			</div>
		</section>
	);
}
