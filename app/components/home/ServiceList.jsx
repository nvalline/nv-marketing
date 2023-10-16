import { sanityClient } from '@/app/lib/sanity';

// Components
import ServiceCard from './ServiceCard';

const getServices = async () => {
	const query = `*[_type == 'services']`;

	const data = await sanityClient.fetch(query);

	return data;
};

export default async function ServiceList() {
	const services = await getServices();

	return (
		<>
			{services.map((service) => (
				<ServiceCard
					key={service._id}
					name={service.name}
					icon={service.icon}
					excerpt={service.excerpt}
				/>
			))}
		</>
	);
}
