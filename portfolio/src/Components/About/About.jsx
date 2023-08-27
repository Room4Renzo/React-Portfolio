import "./About.css";
import Smile from "../../images/SmileSmall.png";

function About() {
	return (
		<div className="About">
			<div id="headshot">
				<img src={Smile} />
				<h2>About Me:</h2>
			</div>
			<div id="aboutMe">
				<p>
					My love for computers comes from a fairly young age and is greater
					than my current experience. I was gifted a PC that soon stopped
					working. I found some instructions online suggesting how I could fix
					it. I used a second PC that also didn't work to make one working unit.
					My Frankenstein. I had always been interested in technology but this
					is where my love for understanding computers and how they work. Once
					you learn about different types of hardware theres not many places to
					go. ie networking, coding, etc. Fortunately for me, the width and
					breadth of options are vast, so there is alot left for me to learn and
					I never want my journey to end.
				</p>
			</div>
		</div>
	);
}

export default About;
