// Variants for Motion Elements | Services Page

// Hero Content Container
export const contentContainer = {
	hidden: {
		opacity: 0
	},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.09,
			staggerDirection: 1
		}
	}
};

// Hero Content
export const heroContent = {
	hidden: {
		opacity: 0,
		y: '5vh'
	},
	show: {
		opacity: 1,
		y: 1,
		transition: {
			duration: 0.5,
			ease: 'easeInOut'
		}
	}
};

// Hero Image
export const heroImg = {
	hidden: {
		opacity: 0,
		scale: 0.75
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			delay: 0.5,
			duration: 0.5,
			ease: 'easeOut'
		}
	}
};

// Service Images
export const serviceImage = {
	hidden: {
		opacity: 0,
		scale: 0.75
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			ease: 'easeOut'
		}
	}
};

// Client Logos
export const clientLogo = {
	hidden: {
		opacity: 0,
		scale: 0.75
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			ease: 'easeOut'
		}
	}
};
