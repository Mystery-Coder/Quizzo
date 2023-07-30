import { useRef } from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<h1>Quizzo - Play and Make Your Own Quizzes</h1>
			<br />

			<Link to="/playquiz">
				<button>Play Quiz</button>
			</Link>
			<Link to="/createquiz">
				<button> Create New Quiz</button>
			</Link>
		</div>
	);
}

export default Home;
