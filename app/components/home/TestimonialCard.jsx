'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import starImg from './assets/star.png';

// Styles
import styles from '../../styles/components/home/TestimonialCard.module.scss';

export default function TestimonialCard({
	author,
	company,
	content,
	position,
	rating
}) {
	const numberOfImages = rating;
	const imageArray = Array.from(
		{ length: numberOfImages },
		(_, index) => index
	);

	useEffect(() => {
		const cards = document.querySelectorAll('#card-container');
		let maxHeight = 0;

		cards.forEach((card) => {
			const cardContent = card.querySelector('#card-content');
			const cardContentHeight = cardContent.offsetHeight;

			if (cardContentHeight > maxHeight) {
				maxHeight = cardContentHeight;
			}
		});

		cards.forEach((card) => {
			card.querySelector('#card-content').style.height = maxHeight + 'px';
		});
	}, [content]);

	return (
		<div id='card-container' className={styles.testimonial_card}>
			<div className={styles.testimonial_card__rating}>
				{imageArray.map((star, index) => {
					return (
						<Image
							key={index}
							src={starImg}
							alt='Star'
							height={20}
							width={20}
							quality={100}
						/>
					);
				})}
			</div>
			<p id='card-content' className={styles.testimonial_card__content}>
				{content}
			</p>
			<h4 className={styles.testimonial_card__author}>{author}</h4>
			<p className={styles.testimonial_card__details}>
				{position}, {company}
			</p>
		</div>
	);
}
