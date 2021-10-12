import styles from '../../styles/footer/Copyright.module.scss';

function Copyright() {
	const options = { year: 'numeric' };
	const year = new Date().toLocaleDateString('en-US', options);

	return (
		<div className={styles.copyright}>
			<p>copyright &copy; {year} | NV Marketing, LLC</p>
			<p>all rights reserved</p>
		</div>
	);
}

export default Copyright;
