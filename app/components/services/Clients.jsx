import { sanityClient } from '../../lib/sanity';

// Components
import ClientLogo from './ClientLogo';

// Styles
import styles from '../../styles/components/services/Clients.module.scss';

const getClients = async () => {
	const query = `*[_type == 'clients'] | order(_createdAt asc)`;

	const data = await sanityClient.fetch(query);

	return data;
};

export default async function Clients() {
	const clients = await getClients();

	return (
		<section className={styles.clients}>
			<div className={styles.clients__wrapper}>
				{/* Content */}
				<div className={styles.clients__content}>
					<h2 className={styles.clients__header}>
						Showcasing Our Digital Impact
					</h2>
					<p className={styles.clients__text}>
						Discover a selection of our proudest moments—projects that have
						reshaped businesses, transformed brands, and elevated online
						experiences.
					</p>
					<p className={styles.clients__text}>
						These case studies are more than just success stories; they are a
						testament to our unwavering commitment to excellence, innovation,
						and results.
					</p>
					<p className={styles.clients__text}>
						Explore our portfolio and witness how we&apos;ve empowered
						businesses to shine in the digital realm.
					</p>
				</div>
				{/* Logos */}
				<div className={styles.clients__logos}>
					{clients.map((client) => (
						<>
							{/* Mobile */}
							<ClientLogo
								className={styles.clients__logo___mobile}
								clientName={client.clientName}
								height={client.mobileHeight}
								image={client.logo}
								key={client._key}
								url={client.url}
								width={client.mobileWidth}
							/>
							{/* Desktop */}
							<ClientLogo
								className={styles.clients__logo___desktop}
								clientName={client.clientName}
								height={client.desktopHeight}
								image={client.logo}
								key={client._key}
								url={client.url}
								width={client.desktopWidth}
							/>
						</>
					))}
				</div>
			</div>
		</section>
	);
}
