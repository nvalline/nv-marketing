'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { valueVars } from './MotionVars';
import circle1 from './assets/value_circle_1.png';
import circle2 from './assets/value_circle_2.png';

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
