import Image from 'next/image';

export const ImageDefault = ({ src, width, height, alt, className }) => {
	return (
		<Image
			src={src}
			width={width}
			height={height}
			alt={alt}
			className={className}
		/>
	);
};

export const ImageFill = ({ src, alt, objectFit, className }) => {
	return (
		<Image
			src={src}
			alt={alt}
			objectFit={objectFit}
			className={className}
			layout='fill'
		/>
	);
};

export const ImageFillPriority = ({ src, alt, objectFit, className }) => {
	return (
		<Image
			src={src}
			alt={alt}
			objectFit={objectFit}
			className={className}
			layout='fill'
			priority
		/>
	);
};
