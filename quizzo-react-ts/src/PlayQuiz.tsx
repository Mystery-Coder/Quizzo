import { v4 } from "uuid";
import { Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import QuestionBox from "./QuestionBox";
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
	function createQuestion(q: string) {
		return <QuestionBox key={v4()} question={q} quizObj={quizQbj} />;
	}

	function submitQuizName() {
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
						setQuizObj(data.data);

						let newQuestions = Object.keys(data.data["options"]); //Questions

						setQuestions(newQuestions);

						setLoaded(true);
					}
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
				label="Quiz Name"
				variant="outlined"
				size="small"
				autoComplete="off"
				onChange={(e) => setQuizName(e.target.value)}
			/>
			<Button color="secondary" size="large" onClick={submitQuizName}>
				Submit
			</Button>
			<br />
			<br />
			{loaded && questions.map(createQuestion)}
		</div>
	);
}

export default PlayQuiz;
