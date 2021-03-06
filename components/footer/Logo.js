import Link from 'next/link';

import { ImageFillPriority } from '../misc/Images';

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
						<ImageFillPriority
							src={logoImg}
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
