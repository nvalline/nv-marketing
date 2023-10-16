// Variants for Motion Elements | About Page

// Hero Image - Mobile
export const heroMobileImg = {
	hidden: {
		opacity: 0,
		scale: 0.75
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			delay: 0.7,
			duration: 0.5,
			ease: 'easeOut'
		}
	}
};

// Hero Image - Desktop
export const heroImgVars = {
	hidden: {
		x: '5vw',
		y: '5vh',
		opacity: 0,
		scale: 0.75
	},
	show: {
		x: 1,
		y: 1,
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			ease: 'easeOut'
		}
	}
};

// Hero Content Container
export const heroContainerVars = {
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
export const heroContentVars = {
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

// Hero Impact Description
export const descVars = {
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

// Bio Image
export const bioImgVars = {
	hidden: {
		opacity: 0,
		scale: 0.5
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

// Core Values
export const valueVars = {
	initial: {
		opacity: 0,
		rotate: '270deg'
	},
	finish: (index) => ({
		opacity: 1,
		rotate: '0deg',
		transition: {
			delay: 0.1 * index,
			duration: 0.5
		}
	})
};
