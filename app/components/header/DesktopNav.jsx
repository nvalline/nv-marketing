// Components
import Links from './Links';

// Styles
import styles from '@/app/styles/components/header/DesktopNav.module.scss';

export default function DesktopNav() {
	return (
		<div className={styles.desktop_nav}>
			<Links
				divClass={styles.desktop_nav__links}
				ulClass={styles.desktop_nav__linksList}
				liClass={styles.desktop_nav__link}
				btnClass={styles.desktop_nav__button}
			/>
		</div>
	);
}
