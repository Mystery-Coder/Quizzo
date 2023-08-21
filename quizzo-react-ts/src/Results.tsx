import { useLocation } from "react-router-dom";

function Results() {
	const location = useLocation();
	const userAnswers = location.state["userAnswers"];
	const quizObj = location.state["quizObj"];
	const questions = location.state["questions"];

	let score = 0;

	for (let i = 0; i < userAnswers.length; i++) {
		let question = questions[i];
		let userAnswer = userAnswers[i];
		let actualAnswer = quizObj[question];

		// console.log(question + " " + userAnswer + " " + actualAnswer);

		if (userAnswer === actualAnswer) {
			score++;
		}
	}

	return <p>Results - Your Score is {score}</p>;
}

export default Results;
