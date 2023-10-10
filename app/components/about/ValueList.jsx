'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import circle1 from './value_circle_1.png';
import circle2 from './value_circle_2.png';

const valueVars = {
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

export default function ValueList({
	coreValues,
	divClassname1,
	divClassname2,
	titleClassname
}) {
	return (
		<div className={divClassname1}>
			{coreValues.map((value, index) => {
				return (
					<motion.div
						key={value._id}
						variants={valueVars}
						initial='initial'
						whileInView='finish'
						viewport={{ once: true }}
						custom={index}
						className={divClassname2}
					>
						<Image src={index % 2 ? circle2 : circle1} alt='Core Values' fill />
						<p className={titleClassname}>{value.title}</p>
					</motion.div>
				);
			})}
		</div>
	);
}
