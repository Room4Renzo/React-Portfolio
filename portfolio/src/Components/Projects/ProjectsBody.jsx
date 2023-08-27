import "./Projects.css";
import { ProjectData } from "./ProjectData";

function ProjectsBody() {
	return (
		<div className="ProjectsBody">
			{ProjectData.map((project) => {
				return (
					<div className="ProjectCard">
						<h3>{project.title}</h3>
						<img src={project.image} />
						<p>{project.description}</p>
						<button>
							<a href={project.github}>GitHub</a>
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default ProjectsBody;
