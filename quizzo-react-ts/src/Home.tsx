import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material/";

function Home() {
	return (
		<div>
			<br />

			<Typography variant="h4">
				Quizzo - Play and Make Your Own Quizzes
			</Typography>
			<br />

			<Link to="/playquiz">
				<Button variant="outlined" size="small">
					Play Quiz
				</Button>
			</Link>
			<br />
			<br />
			<Link to="/createquiz">
				<Button variant="outlined" size="small">
					Create New Quiz
				</Button>
			</Link>
		</div>
	);
}

export default Home;
