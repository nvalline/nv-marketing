import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/footer/Social.module.scss';

function Social() {
	return (
		<div className={styles.social}>
			<Link href='#'>
				<a className={styles.social__link}>
					<div className={styles.social__iconWrapper}>
						<Image
							src='/images/svgs/fb_icon.svg'
							alt='facebook'
							className={styles.social__icon}
							layout='fill'
							priority
						/>
					</div>
				</a>
			</Link>
			<Link href='#'>
				<a className={styles.social__link}>
					<div className={styles.social__iconWrapper}>
						<Image
							src='/images/svgs/ig_icon.svg'
							alt='instagram'
							className={styles.social__icon}
							layout='fill'
							priority
						/>
					</div>
				</a>
			</Link>
		</div>
	);
}

export default Social;
