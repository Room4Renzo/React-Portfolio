import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/About/About.jsx";
import ProjectsBody from "./Components/Projects/ProjectsBody.jsx";
import { ProjectData } from "./Components/Projects/ProjectData.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
	const data = ProjectData;

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
			<Skills />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
