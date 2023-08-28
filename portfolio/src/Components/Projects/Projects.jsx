import "./Projects.css";
import { ProjectData } from "./ProjectData";
import ProjectsBody from "./ProjectsBody";

function Projects() {
	const data = ProjectData;

	return (
		<div className="Projects">
			<h1>Projects</h1>
			<ProjectsBody
				key={data.id}
				title={data.title}
				image={data.img}
				description={data.description}
				link={data.github}
			/>
		</div>
	);
}

export default Projects;
