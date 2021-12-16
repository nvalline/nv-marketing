import SectionHeader from '../../misc/SectionHeader';
import ProjectCard from './ProjectCard';

import styles from '../../../styles/home/projects/Projects.module.scss';

function Projects({ projects }) {
	const projectsData = projects;

	return (
		<section className={styles.projects} id='recent_projects'>
			<SectionHeader title='recent projects' />
			<div className={styles.projects__block}>
				{projectsData.map((project) => {
					return <ProjectCard key={project.id} {...project} />;
				})}
			</div>
		</section>
	);
}

export default Projects;
