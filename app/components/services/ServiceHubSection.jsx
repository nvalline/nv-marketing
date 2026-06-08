import Image from 'next/image';
import Link from 'next/link';
import { sanityClient, urlFor } from '../../lib/sanity';

// Styles
import styles from '../../styles/components/services/ServiceHubSection.module.scss';

const SERVICE_HREFS = {
	'web design': '/services/web-design',
	'web development': '/services/web-development',
	'seo': '/services/seo',
	'seo services': '/services/seo'
};

const getServices = async () => {
	const data = await sanityClient.fetch(`*[_type == 'services']`);
	return data;
};

export default async function ServiceHubSection() {
	const services = await getServices();

	return (
		<section className={styles.hub}>
			<div className={styles.hub__wrapper}>
				<h2 className={styles.hub__header}>Our Services, Your Success</h2>
				<p className={styles.hub__sub_header}>
					We specialize in crafting custom web solutions that not only showcase
					the uniqueness of your business but also <strong>drive results</strong>.
				</p>
				<div className={styles.hub__cards}>
					{services.map((service) => {
						const href = SERVICE_HREFS[service.name?.toLowerCase()] ?? '/services';
						const icon = urlFor(service.icon).url();

						return (
							<Link key={service._id} href={href} className={styles.hub__card}>
								<div className={styles.hub__icon}>
									<Image src={icon} alt={service.name} fill />
								</div>
								<h3 className={styles.hub__card_title}>{service.name}</h3>
								<p className={styles.hub__card_excerpt}>{service.excerpt}</p>
								<span className={styles.hub__card_cta}>Learn More →</span>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}
