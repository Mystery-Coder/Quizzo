import { useLocation, useNavigate } from "react-router-dom";
import {
	Typography,
	FormControl,
	RadioGroup,
	FormControlLabel,
	Radio,
	Button,
} from "@mui/material/";

import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

function LoadedQuiz() {
	//Navigate Hook
	const navigate = useNavigate();

	//Data loaded from Home page
	const location = useLocation();
	const quizObj = location.state["quizObj"];
	const questions = Object.keys(quizObj["options"]);
	const quizName = location.state["quizName"];

	//React State
	const [noOfQuestions, setNoOfQuestions] = useState(questions.length);
	const [questionIdx, setQuestionIdx] = useState(0);
	let [userAnswers, setUserAnswers] = useState([]);
	const [option, setOption] = useState(
		quizObj["options"][questions[questionIdx]][0]
	);

	function submitQuestion() {
		if (questionIdx == questions.length - 1) {
			alert("all questions answered");
			userAnswers = [...userAnswers, option];
			navigate("/results", {
				state: { userAnswers, quizObj, questions },
				replace: true,
			});
			return;
		} else {
			setUserAnswers((oldAnswers) => [...oldAnswers, option]);

			setQuestionIdx(questionIdx + 1);

			setNoOfQuestions(noOfQuestions - 1);
		}
	}

	return (
		<>
			<Typography variant="h5">Playing Quiz Name - {quizName}</Typography>
			<Typography variant="h6">
				{noOfQuestions} questions are remaining
			</Typography>

			{questionIdx < questions.length && (
				<>
					<div className="bordered">
						{questions[questionIdx]}
						<br />
						<FormControl>
							<RadioGroup
								value={option}
								onChange={(e) => setOption(e.target.value)}
							>
								<FormControlLabel
									value={
										quizObj["options"][
											questions[questionIdx]
										][0]
									}
									control={<Radio color="secondary" />}
									label={
										quizObj["options"][
											questions[questionIdx]
										][0]
									}
								/>
								<FormControlLabel
									value={
										quizObj["options"][
											questions[questionIdx]
										][1]
									}
									control={<Radio color="secondary" />}
									label={
										quizObj["options"][
											questions[questionIdx]
										][1]
									}
								/>
								<FormControlLabel
									value={
										quizObj["options"][
											questions[questionIdx]
										][2]
									}
									control={<Radio color="secondary" />}
									label={
										quizObj["options"][
											questions[questionIdx]
										][2]
									}
								/>
								<FormControlLabel
									value={
										quizObj["options"][
											questions[questionIdx]
										][3]
									}
									control={<Radio color="secondary" />}
									label={
										quizObj["options"][
											questions[questionIdx]
										][3]
									}
								/>
							</RadioGroup>
						</FormControl>
					</div>
					<Button
						variant="contained"
						endIcon={<SendIcon />}
						onClick={submitQuestion}
					>
						Next Question
					</Button>
				</>
			)}
		</>
	);
}

export default LoadedQuiz;
