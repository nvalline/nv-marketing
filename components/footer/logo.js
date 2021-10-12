import Image from 'next/image';
import Link from 'next/link';

import logoImg from '../../public/images/nv_mktg_logo_white.svg';

import styles from '../../styles/footer/Logo.module.scss';

function Logo() {
	return (
		<div className={styles.logo}>
			<Link href='/'>
				<a>
					<div className={styles.logo__wrapper}>
						<Image
							src={logoImg}
							alt='NV Marketing, LLC logo'
							className={styles.logo__image}
							layout='fill'
						/>
					</div>
				</a>
			</Link>
		</div>
	);
}

export default Logo;
