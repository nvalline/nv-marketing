import Image from 'next/image';
import arrows from './arrows.png';

// Components
import Form from './Form';
import PrimaryBtn from '../misc/PrimaryBtn';

// Styles
import styles from '../../styles/components/contact/Contact.module.scss';

export default function Contact() {
	return (
		<section className={styles.contact}>
			<h1 className={styles.contact__title}>Contact Us</h1>
			<div className={styles.contact__wrapper}>
				{/* Schedule Call */}
				<div className={styles.contact__block}>
					<h2 className={styles.contact__header}>Schedule A Call</h2>
					<p className={styles.contact__text}>
						We&apos;re here to bring your digital vision to life. If you have
						questions, ideas, or just want to explore the possibilities,
						we&apos;d love to chat. Schedule a call today. We&apos;re eager to
						hear from you and help turn your dreams into digital realities.
					</p>
					<a
						href='https://calendly.com/nv-marketing-llc'
						target='_blank'
						rel='noopenner noreferrer'
					>
						<PrimaryBtn
							text='Click Here to Schedule a Time'
							classname={styles.contact__btn}
						/>
					</a>
				</div>
				<div className={styles.contact__arrows}>
					<Image src={arrows} alt='arrows' fill />
				</div>
				{/* Form */}
				<div className={styles.contact__block}>
					<h2 className={styles.contact__header}>Send A Message</h2>
					<Form />
				</div>
			</div>
		</section>
	);
}
