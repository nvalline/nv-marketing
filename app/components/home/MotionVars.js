// Variants for Motion Elements | Home Page

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

// Services Header
export const serviceHeader = {
	hidden: {
		opacity: 0
	},
	show: {
		opacity: 1,
		transition: {
			delay: 1,
			duration: 0.5
		}
	}
};

// Services Content
export const serviceVars = {
	hidden: {
		y: '5vh',
		opacity: 0
	},
	show: {
		y: 1,
		opacity: 1,
		transition: {
			delay: 0.3,
			ease: 'easeOut'
		}
	}
};

// Testimonials
export const testimonialVars = {
	hidden: {
		y: '5vh',
		opacity: 0
	},
	show: {
		y: 1,
		opacity: 1,
		transition: {
			delay: 0.3,
			ease: 'easeOut'
		}
	}
};
