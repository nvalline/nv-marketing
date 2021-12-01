// import Image from 'next/image';
import Link from 'next/link';
import Button from '../../misc/Buttons';

import articleImg from '../../../public/images/articles/digital_world.png';

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
						The Importance of Digital Presence for Business
					</h2>
					<p className={styles.articles__desc}>
						Having a digital presence for your business is vital to its success.
						Your business needs a strong presence to attract new customers and
						keep current ones.
					</p>
					<p className={styles.articles__desc}>
						A digital presence will help market your company's brand. It will
						improve the ease of showcasing products and services. Customers will
						be able to easily find you. And you will be able to build lasting
						relationships with your customers.
					</p>
					<p className={styles.articles__desc}>
						There are several ways to build a digital presence and it won't
						happen overnight. It is best to put a plan in place, stick to it and
						set attainable goals.
					</p>
					<Link href='/articles' passHref>
						<Button
							type='button'
							className={styles.articles__button}
							text='explore more'
						/>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Articles;
