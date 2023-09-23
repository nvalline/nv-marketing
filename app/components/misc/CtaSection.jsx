'use client';

import { usePathname } from 'next/navigation';

// Components
import FullLinesLower from './FullLinesLower';
import FullLinesUpper from './FullLinesUpper';
import Cta from './Cta';

export default function CtaSection() {
	const pathname = usePathname();
	let page = '';

	switch (pathname) {
		case '/about':
			if (pathname === '/about') {
				page = 'about';
			}
			break;

		case '/':
			if (pathname === '/') {
				page = 'home';
			}
			break;

		default:
			page = 'home';
	}

	return (
		<>
			<div className='fullAccentLines'>
				<FullLinesUpper />
			</div>
			<Cta page={page} />
			<div className='fullAccentLines'>
				<FullLinesLower />
			</div>
		</>
	);
}
