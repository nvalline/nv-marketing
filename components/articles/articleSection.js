import Image from 'next/image';
import Button from '../misc/buttons';
import articleImg from '../../public/images/devices.jpg';

import styles from '../../styles/articles/ArticleSection.module.scss';

function ArticleSection() {
	const handleArticleBtnClick = () => {
		console.log('ARTICLE BTN CLICKED');
	};

	return (
		<section className={styles.articleSection}>
			<div className={styles.imageWrapper}>
				<Image
					src={articleImg}
					alt='Devices'
					className={styles.imageWrapper__img}
					layout='fill'
				/>
			</div>
			<div className={styles.articleSection__contentWrapper}>
				<h2 className={styles.articleSection__title}>
					Tips To Expand Your Digital Presence
				</h2>
				<p className={styles.articleSection__desc}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
					rhoncus, lobortis neque pellentesque. Maecenas erat turpis sapien
					semper nulla risus. Venenatis cras sed quam sagittis, iaculis mauris
					in egestas.
				</p>
				<Button
					type='button'
					className={styles.articleSection__button}
					onClick={handleArticleBtnClick}
					text='read more'
				/>
			</div>
		</section>
	);
}

export default ArticleSection;
