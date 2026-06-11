// Navigation Links Data List

// All links EXCEPT for contact page (hard coded)
export const linkList = [
	{ title: 'Home', href: '/' },
	{ title: 'About', href: '/about' },
	{
		title: 'Services',
		href: '/services',
		children: [
			{ title: 'Web Design', href: '/services/web-design' },
			{ title: 'Web Development', href: '/services/web-development' },
			{ title: 'SEO', href: '/services/seo' }
		]
	},
	{ title: 'Plans', href: '/plans' },
	{ title: 'Blog', href: '/blog' }
];
