import Head from 'next/head';

import Layout from '../components/Layout';
import Hero from '../components/home/hero/Hero';
import Services from '../components/home/services/Services';
import Articles from '../components/home/articles/Articles';
import Testimonials from '../components/home/testimonials/Testimonials';
import Projects from '../components/home/projects/Projects';
import LowerCta from '../components/home/lowerCta/LowerCta';

import { projects } from '../data/Projects';
import { services } from '../data/Services';
import { testimonials } from '../data/Testimonials';

export default function Home({ projectInfo, serviceInfo, testimonialInfo }) {
	return (
		<>
			<Head>
				{/* Page Title */}
				<title>NV Marketing, LLC</title>
				{/* Page Description */}
				<meta
					name='description'
					content='NV Marketing, LLC provides website design services for small business. Website design packages include design & development and SEO to increase traffic'
				/>
				<meta
					name='keywords'
					content='website design, website development, seo, digital presence, design agency, freelance, web builder, small business website'
				/>
			</Head>

			{/* Main Hero Section */}
			<Hero />

			{/* Services Offered Section */}
			<Services services={serviceInfo} />

			{/* Blog Articles Section */}
			<Articles />

			{/* Client Testimonials Section */}
			<Testimonials testimonials={testimonialInfo} />

			{/* Recent Client Projects Section */}
			<Projects projects={projectInfo} />

			{/* Below Fold CTA Section */}
			<LowerCta />
		</>
	);
}

Home.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
	return {
		props: {
			projectInfo: projects,
			serviceInfo: services,
			testimonialInfo: testimonials
		}
	};
}
