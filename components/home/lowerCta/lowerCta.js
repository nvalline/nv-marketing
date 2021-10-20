import SectionHeader from '../../misc/sectionHeader';
import Button from '../../misc/buttons';

import styles from '../../../styles/home/lowerCta/LowerCta.module.scss';

function LowerCta() {
	const handleBtnClick = () => {
		console.log('CTA BTN CLICKED');
	};
	return (
		<section className={styles.lowerCta}>
			<SectionHeader title='ready to expand your digital presence?' />
			<Button
				type='button'
				className={styles.lowerCta__button}
				onclick={handleBtnClick}
				text='get in touch now'
			/>
		</section>
	);
}

export default LowerCta;
