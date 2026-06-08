import Link from 'next/link';

// Components
import PrimaryBtn from '@/app/components/misc/PrimaryBtn';

// Styles
import styles from '@/app/styles/components/blog/BlogPostCta.module.scss';

export default function BlogPostCta() {
	return (
		<section className={styles.blog_cta}>
			<div className={styles.blog_cta__wrapper}>
				<div className={styles.blog_cta__content}>
					<h2 className={styles.blog_cta__header}>
						Ready to grow your business online?
					</h2>
					<p className={styles.blog_cta__sub_header}>
						Schedule a free 30-minute consultation.
					</p>
				</div>
				<Link href='/contact'>
					<PrimaryBtn text='Get Started' classname={styles.blog_cta__btn} />
				</Link>
			</div>
		</section>
	);
}
