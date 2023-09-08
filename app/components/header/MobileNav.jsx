'use client';

import Link from 'next/link';
import { useState } from 'react';

// Components
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// Styles
import styles from '@/app/styles/components/header/MobileNav.module.scss';

export default function MobileNav() {
	const [showIcon, setShowIcon] = useState(false);

	const handleIconToggle = () => {
		setShowIcon(!showIcon);
	};

	return (
		<>
			{/* OnClick Change Icon */}
			<div onClick={handleIconToggle}>
				{showIcon ? <AiOutlineClose /> : <AiOutlineMenu />}
			</div>

			<div>
				<p>menu items</p>
			</div>
		</>
	);
}
