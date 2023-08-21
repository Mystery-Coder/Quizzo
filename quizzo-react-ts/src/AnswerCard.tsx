import { Card, CardContent, Typography } from "@mui/material/";

function AnswerCard({ userAnswerObj }) {
	const border_color =
		userAnswerObj.correct === true ? "success.main" : "error.main";

	return (
		<Card
			sx={{
				paddingTop: 2.5,
				paddingBottom: 2.5,
				marginTop: 2.5,
				marginBottom: 2.5,
				border: 1.75,
				borderColor: border_color,
				borderRadius: 3.5,
				width: 300,
			}}
			className="centered"
		>
			<CardContent>
				<Typography variant="h6">
					Question: {userAnswerObj.question}
				</Typography>
				<Typography>Your Answer: {userAnswerObj.userAnswer}</Typography>
				<Typography>
					Correct Answer: {userAnswerObj.actualAnswer}
				</Typography>
				{userAnswerObj.correct && (
					<Typography variant="h6">Correct ✔️</Typography>
				)}
				{!userAnswerObj.correct && (
					<Typography variant="h6">Wrong ❌</Typography>
				)}
			</CardContent>
		</Card>
	);
}

export default AnswerCard;
