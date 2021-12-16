import { ImageFillPriority } from '../misc/Images';

import styles from '../../styles/footer/Social.module.scss';

function Social() {
	return (
		<div className={styles.social}>
			<a
				href='https://www.facebook.com/nvmarketingllc'
				target='_blank'
				rel='noopener noreferrer'
				className={styles.social__link}
			>
				<div className={styles.social__iconWrapper}>
					<ImageFillPriority
						src='/images/svgs/fb_icon.svg'
						alt='facebook'
						className={styles.social__icon}
					/>
				</div>
			</a>
			<a
				href='https://www.instagram.com/nv_marketing_llc/'
				target='_blank'
				rel='noopener noreferrer'
				className={styles.social__link}
			>
				<div className={styles.social__iconWrapper}>
					<ImageFillPriority
						src='/images/svgs/ig_icon.svg'
						alt='instagram'
						className={styles.social__icon}
					/>
				</div>
			</a>
		</div>
	);
}

export default Social;
