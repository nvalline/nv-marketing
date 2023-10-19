// Variants for Motion Elements | Contact Page

// Hero Address Block
export const addressBlock = {
	hidden: {
		opacity: 0,
		scale: 0.75,
		x: '-5vw',
		y: '3vh'
	},
	show: {
		opacity: 1,
		scale: 1,
		x: 1,
		y: 1,
		transition: {
			delay: 0.3,
			duration: 0.5,
			ease: 'easeOut'
		}
	}
};

// Arrow Divider Image
export const dividerImgSm = {
	hidden: {
		opacity: 0,
		scale: 0.75,
		rotate: '90deg'
	},
	finish: {
		opacity: 1,
		scale: 1,
		rotate: '0deg',
		transition: {
			duration: 0.7
		}
	}
};

export const dividerImgLg = {
	hidden: {
		opacity: 0,
		scale: 0.75,
		rotate: '180deg'
	},
	finish: {
		opacity: 1,
		scale: 1,
		rotate: '90deg',
		transition: {
			duration: 0.7
		}
	}
};
