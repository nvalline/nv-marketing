import SectionHeader from '../../misc/sectionHeader';
import ProjectCard from './projectCard';
import { projects } from '../../../data/projects';

import styles from '../../../styles/home/projects/Projects.module.scss';

function Projects() {
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
