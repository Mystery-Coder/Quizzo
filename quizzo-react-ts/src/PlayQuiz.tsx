import { v4 } from "uuid";
import { Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

const get_URL = "http://localhost:8000/quizzo/get_quiz/"; //quiz name must be added on

// Response JSON is like
// {
// 	data: {
// 		"q" : "ans",
// 		"options":{
// 			"q": ["ans", "b", "c", "d"]
// 		}
// 	}
// }

function PlayQuiz() {
	const [quizName, setQuizName] = useState("");

	function submitQuizName() {
		if (quizName) {
			fetch(get_URL + quizName)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					console.log(data);
				});
		} else {
			alert("Enter Quiz Name");
			return;
		}
	}

	return (
		<div>
			<Typography variant="h4">Play Quiz</Typography>
			<br />
			<TextField
				id="outlined-basic"
				label="Quiz Name"
				variant="outlined"
				size="small"
				onChange={(e) => setQuizName(e.target.value)}
			/>
			<Button color="secondary" size="large" onClick={submitQuizName}>
				Submit
			</Button>
		</div>
	);
}

export default PlayQuiz;
