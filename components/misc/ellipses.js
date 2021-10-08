import Image from 'next/image';
import ellipses from '../../public/images/ellipses.svg';

import styles from '../../styles/misc/Ellipses.module.scss';

function Ellipses() {
	return (
		<div className={styles.ellipsesWrapper}>
			<Image
				src={ellipses}
				alt='ellipses'
				className={styles.ellipsesWrapper__ellipses}
				layout='fill'
			/>
		</div>
	);
}

export default Ellipses;
