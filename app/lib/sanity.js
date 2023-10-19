import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

const config = {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	useCdn: true,
	apiVersion: '2023-09-11'
	/**
	 * Set the useCdn to 'false' if app requires the freshest data always (potentially slightly slower and a bit more expensive).
	 * Authenticated request (like preview) will always bypass the CDN.
	 **/
};

// Helper function to generate Image URLs with only the asset reference data in the documents.
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);
