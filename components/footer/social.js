import Image from 'next/image';
import Link from 'next/link';

import { socialLinks } from '../../data/NavLinks';

import styles from '../../styles/footer/Social.module.scss';

function Social() {
	const socLinksData = socialLinks;

	return (
		<div className={styles.social}>
			{socLinksData.map((link) => {
				return (
					<Link href={link.url}>
						<a className={styles.social__link}>
							<div className={styles.social__iconWrapper}>
								<Image
									src={link.img}
									alt={link.name}
									className={styles.social__icon}
									layout='fill'
								/>
							</div>
						</a>
					</Link>
				);
			})}
		</div>
	);
}

export default Social;
