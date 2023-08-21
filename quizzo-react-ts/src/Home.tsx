import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, TextField } from "@mui/material/";

function Home() {
	const navigate = useNavigate();
	const [quizName, setQuizName] = useState("");
	const get_URL = "http://localhost:8000/quizzo/get_quiz/"; //quiz name must be added on

	function playQuizName() {
		if (quizName) {
			fetch(get_URL + quizName)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					if (data.exists === false) {
						alert(`${quizName} does not exist`);
						return;
					} else {
						const quizObj = data.data;
						navigate("/loadedquiz", {
							state: { quizObj, quizName },
						});
						return;
					}
				});
		} else {
			alert("Enter Quiz Name");
			return;
		}
	}

	function createQuizName() {
		if (quizName) {
			fetch(get_URL + quizName)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					if (data.exists === false) {
						navigate("/createquiz", {
							state: { quizName },
						});
						return;
					} else {
						alert(`${quizName} already exists`);
						return;
					}
				});
		} else {
			alert("Enter Quiz Name");
			return;
		}
	}

	return (
		<div>
			<br />

			<Typography variant="h4">
				Quizzo - Play and Make Your Own Quizzes
			</Typography>
			<br />

			<div>
				<br />
				<TextField
					label="Quiz Name"
					variant="outlined"
					size="small"
					autoComplete="off"
					onChange={(e) => setQuizName(e.target.value)}
				/>
				<br />
				<br />
			</div>

			<Button variant="outlined" size="small" onClick={playQuizName}>
				Play Quiz
			</Button>

			<br />
			<br />

			<Button variant="outlined" size="small" onClick={createQuizName}>
				Create New Quiz
			</Button>
		</div>
	);
}

export default Home;
