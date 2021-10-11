import SectionHeader from '../misc/sectionHeader';
import ProjectCard from './projectCard';
import { projects } from '../../data/projects';

import styles from '../../styles/projects/Projects.module.scss';

function Projects() {
	const projectsData = projects;

	return (
		<section className={styles.projects}>
			<SectionHeader title='recent projects' />
			{projectsData.map((project) => {
				return <ProjectCard key={project.id} {...project} />;
			})}
		</section>
	);
}

export default Projects;
