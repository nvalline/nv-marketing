// Components
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';

// Styles
import styles from '../../styles/components/footer/SocialLinks.module.scss';

export default function SocialLinks() {
	return (
		<div className={styles.social_links}>
			<a
				href='https://www.facebook.com/nvmarketingllc'
				aria-label='Facebook'
				target='_blank'
				rel='noopener noreferrer'
			>
				<AiOutlineFacebook size={35} className={styles.social_links__icon} />
			</a>
			<a
				href='https://www.instagram.com/nv_marketing_llc/'
				aria-label='Instagram'
				target='_blank'
				rel='noopener noreferrer'
			>
				<AiOutlineInstagram size={35} className={styles.social_links__icon} />
			</a>
		</div>
	);
}
