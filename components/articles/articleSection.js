import Image from 'next/image';
import Button from '../misc/buttons';
import articleImg from '../../public/images/devices.jpg';

import styles from '../../styles/articles/ArticleSection.module.scss';

function Articles() {
	const handleArticleBtnClick = () => {
		console.log('ARTICLE BTN CLICKED');
	};

	return (
		<section className={styles.articles}>
			<div className={styles.articles__container}>
				<div className={styles.imageWrapper}>
					<Image
						src={articleImg}
						alt='Devices'
						className={styles.imageWrapper__img}
						layout='fill'
					/>
				</div>
				<div className={styles.articles__contentWrapper}>
					<h2 className={styles.articles__title}>
						Tips To Expand Your Digital Presence
					</h2>
					<p className={styles.articles__desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
						rhoncus, lobortis neque pellentesque. Maecenas erat turpis sapien
						semper nulla risus. Venenatis cras sed quam sagittis, iaculis mauris
						in egestas.
					</p>
					<Button
						type='button'
						className={styles.articles__button}
						onClick={handleArticleBtnClick}
						text='read more'
					/>
				</div>
			</div>
		</section>
	);
}

export default Articles;
