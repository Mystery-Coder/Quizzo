import { Typography, TextField, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 } from "uuid";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";

function CreateQuiz() {
	const location = useLocation();
	const quizName = location.state["quizName"];
	const postURL = "http://localhost:8000/quizzo/post_quiz";
	const navigate = useNavigate();
	//React State
	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState("");
	const [option1, setOption1] = useState("");
	const [option2, setOption2] = useState("");
	const [option3, setOption3] = useState("");
	const [option4, setOption4] = useState("");
	const [questions, setQuestions] = useState({});
	// const [quizObj, setQuizObj] = useState({});
	const [options, setOptions] = useState({});

	//Functions
	function addQuestion() {
		if (
			question === "" ||
			answer === "" ||
			option1 === "" ||
			option2 === "" ||
			option3 === "" ||
			option4 === ""
		) {
			alert("Enter All Required Fields.");
			return;
		}

		setQuestions((oldQuestions) => {
			let newQuestions = { ...oldQuestions };
			newQuestions[question] = answer;
			return newQuestions;
		});

		setOptions((oldOptions) => {
			let newOptions = { ...oldOptions };
			newOptions[question] = [option1, option2, option3, option4];

			return newOptions;
		});

		setQuestion("");
		setAnswer("");
		setOption1("");
		setOption2("");
		setOption3("");
		setOption4("");
		return;
	}

	function saveQuiz() {
		let quizObj = { ...questions, options };

		let dataToBeSent = {
			quizName,
			data: quizObj,
		};

		fetch(postURL, {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(dataToBeSent),
		}).then((res) => {
			alert(`Quiz saved under the name, ${quizName}.`);
			navigate("/", {
				replace: true,
			});
			return;
		});
	}
	return (
		<div className="centered">
			<Typography variant="h4">Creating Quiz - {quizName}</Typography>
			<br />
			<br />
			<TextField
				label="Question"
				sx={{ margin: 1 }}
				variant="outlined"
				size="small"
				value={question}
				onChange={(e) => setQuestion(e.target.value)}
				required
			/>
			<TextField
				label="Answer"
				sx={{ margin: 1 }}
				variant="outlined"
				size="small"
				value={answer}
				onChange={(e) => setAnswer(e.target.value)}
				required
			/>

			<br />
			<br />
			<TextField
				label="Option 1"
				sx={{ marginBottom: 2 }}
				variant="outlined"
				size="small"
				value={option1}
				required
				onChange={(e) => setOption1(e.target.value)}
			/>
			<br />
			<TextField
				label="Option 2"
				sx={{ marginBottom: 2 }}
				variant="outlined"
				size="small"
				value={option2}
				required
				onChange={(e) => setOption2(e.target.value)}
			/>
			<br />
			<TextField
				label="Option 3"
				sx={{ marginBottom: 2 }}
				variant="outlined"
				size="small"
				required
				value={option3}
				onChange={(e) => setOption3(e.target.value)}
			/>
			<br />
			<TextField
				label="Option 4"
				sx={{ marginBottom: 2 }}
				variant="outlined"
				size="small"
				value={option4}
				required
				onChange={(e) => setOption4(e.target.value)}
			/>
			<br />
			<Button endIcon={<AddIcon />} onClick={addQuestion}>
				Add Question
			</Button>
			<br />
			<br />
			{Object.keys(questions).length ? (
				<>
					<Typography>Questions added</Typography>
					{Object.keys(questions).map((q) => (
						<Typography variant="h6" key={v4()}>
							{q}
						</Typography>
					))}
				</>
			) : (
				<Typography>No Questions Added</Typography>
			)}

			<br />
			<br />
			<Button endIcon={<SaveIcon />} onClick={saveQuiz}>
				Save Quiz
			</Button>
		</div>
	);
}

export default CreateQuiz;
