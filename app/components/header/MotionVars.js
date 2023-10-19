// Variants for Motion Elements | Mobile Navigation

// Overlay Container
export const navOverlay = {
	hidden: {
		scaleY: 0
	},
	show: {
		scaleY: 1,
		transition: {
			duration: 0.35,
			ease: [0.12, 0, 0.39, 0]
		}
	},
	exit: {
		scaleY: 0,
		transition: {
			delay: 0.3,
			duration: 0.35,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

// Mobile Link Container
export const linkContainer = {
	hidden: {
		transition: {
			staggerChildren: 0.1,
			staggerDirection: -1
		}
	},
	show: {
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.09,
			staggerDirection: 1
		}
	}
};

// Mobile Links
export const linkVars = {
	hidden: {
		y: '30vh',
		transition: {
			duration: 0.4,
			ease: 'easeOut'
		}
	},
	show: {
		y: 0,
		transition: {
			duration: 0.5,
			ease: 'easeOut'
		}
	}
};
