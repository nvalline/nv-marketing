// import Image from 'next/image';
import Link from 'next/link';
import Button from '../../misc/Buttons';

import articleImg from '../../../public/images/articles/devices.jpg';

import styles from '../../../styles/home/articles/ArticleSection.module.scss';

function Articles() {
	return (
		<section className={styles.articles}>
			<div className={styles.articles__container}>
				<div className={styles.articles__imageWrapper}>
					{/* <Image
						src={articleImg}
						alt='Devices'
						className={styles.imageWrapper__img}
						layout='fill'
						priority
					/> */}
					<img
						src={articleImg.src}
						alt='Devices'
						className={styles.articles__img}
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
					<Link href='/articles' passHref>
						<Button
							type='button'
							className={styles.articles__button}
							text='read more'
						/>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Articles;
