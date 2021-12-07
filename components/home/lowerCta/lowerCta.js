import Link from 'next/link';
import SectionHeader from '../../misc/SectionHeader';
import Button from '../../misc/Buttons';

import styles from '../../../styles/home/lowerCta/LowerCta.module.scss';

function LowerCta() {
	return (
		<section className={styles.lowerCta}>
			<SectionHeader title='ready to expand your digital presence?' />
			<Link href='/contact' passHref>
				<>
					<Button
						type='button'
						className={styles.lowerCta__button}
						text='get in touch now'
					/>
				</>
			</Link>
		</section>
	);
}

export default LowerCta;
