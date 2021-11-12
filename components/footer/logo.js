import Image from 'next/image';
import Link from 'next/link';

import logoImg from '../../public/images/svgs/nv_mktg_logo_white.svg';

import styles from '../../styles/footer/Logo.module.scss';

function Logo({ screen }) {
	return (
		<div
			className={
				screen === 'desktop'
					? `${styles.logo} ${styles.desktop}`
					: `${styles.logo} ${styles.mobile}`
			}
		>
			<Link href='/'>
				<a>
					<div className={styles.logo__wrapper}>
						{/* <Image
							src={logoImg}
							alt='NV Marketing, LLC logo'
							className={styles.logo__image}
							layout='fill'
							priority
						/> */}
						<img
							src={logoImg.src}
							alt='NV Marketing, LLC logo'
							className={styles.logo__image}
						/>
					</div>
				</a>
			</Link>
		</div>
	);
}

export default Logo;
