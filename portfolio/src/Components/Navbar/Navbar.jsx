import "./Navbar.css";

function Navbar() {
	return (
		<div className="Navbar">
			<h1>Lorenzo Francis-Walker</h1>
			<h3>Software Developer</h3>

			<div className="Navbar-Links">
				<ul>
					<li>
						<a href="#About">About</a>
					</li>
					<li>
						<a href="#Projects">Projects</a>
					</li>
					<li>
						<a href="#Skills">Skills</a>
					</li>
					<li>
						<a href="#Contact">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
