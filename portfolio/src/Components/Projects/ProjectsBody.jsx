import "./Projects.css";
import { ProjectData } from "./ProjectData";

function ProjectsBody() {
	return (
		<div className="ProjectsBody">
			{ProjectData.map((project) => {
				return (
					<div
						className="ProjectsCard"
						id={project.id}
					>
						<h3>{project.title}</h3>
						<img src={project.image} />
						<p>{project.description}</p>
						<a href={project.github}>
							<button>Check Me Out!</button>
						</a>
					</div>
				);
			})}
		</div>
	);
}

export default ProjectsBody;
