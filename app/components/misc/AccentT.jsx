import Image from 'next/image';
import accentT from '../misc/accent_t.png';

import React from 'react';

export default function AccentT({ className }) {
	return (
		<div className={className}>
			<Image src={accentT} alt='Accent' height={48} width={95} />
		</div>
	);
}
