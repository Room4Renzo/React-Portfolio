import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/About/About.jsx";
import ProjectsBody from "./Components/Projects/ProjectsBody.jsx";
import { ProjectData } from "./Components/Projects/ProjectData";

function App() {
	const data = ProjectData;
	console.log(data);

	return (
		<div className="App">
			<Navbar />
			<About />
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

export default App;
