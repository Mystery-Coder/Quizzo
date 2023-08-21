import { useLocation, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import AnswerCard from "./AnswerCard";
import { Typography, Button } from "@mui/material/";
import HomeIcon from "@mui/icons-material/Home";
function Results() {
	const location = useLocation();
	const navigate = useNavigate();

	function goToHome() {
		navigate("/", { replace: true });
	}

	const userAnswers = location.state["userAnswers"];
	const quizObj = location.state["quizObj"];
	const quizName = location.state["quizName"];
	const questions = location.state["questions"];
	const userAnswerArr = [];

	let score = 0;

	for (let i = 0; i < userAnswers.length; i++) {
		let question = questions[i];
		let userAnswer = userAnswers[i];
		let actualAnswer = quizObj[question];
		let correct = false;

		if (userAnswer === actualAnswer) {
			score++;
			correct = true;
		}

		let obj = { question, userAnswer, actualAnswer, correct };
		userAnswerArr.push(obj);
	}
	const percentage = Math.round((score / questions.length) * 100);
	return (
		<div className="centered">
			<Typography variant="h2">
				Your Results For Quiz, {quizName}
			</Typography>

			{userAnswerArr.map((obj) => {
				return <AnswerCard key={v4()} userAnswerObj={obj} />;
			})}

			<Typography variant="h4">
				You scored {score}/{questions.length} which is {percentage}%
			</Typography>
			<br />
			<Button
				variant="contained"
				endIcon={<HomeIcon />}
				onClick={goToHome}
			>
				Back to Home
			</Button>
		</div>
	);
}

export default Results;
