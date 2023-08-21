import {
	FormControl,
	FormLabel,
	RadioGroup,
	Radio,
	FormControlLabel,
} from "@mui/material";

import { useState } from "react";

// quizObj = {
// 	"Q1" : "ans",
// 	"options": {
// 		"Q1": ["ans", "A", "B", "C"]
// 	}
// }

function QuestionBox({ question, quizObj }) {
	const [option, setOption] = useState(quizObj["options"][question][0]);

	return (
		<div className="bordered">
			{question}
			<br />
			<FormControl>
				<RadioGroup
					value={option}
					onChange={(e) => setOption(e.target.value)}
				>
					<FormControlLabel
						value={quizObj["options"][question][0]}
						control={<Radio color="secondary" />}
						label={quizObj["options"][question][0]}
					/>
					<FormControlLabel
						value={quizObj["options"][question][1]}
						control={<Radio color="secondary" />}
						label={quizObj["options"][question][1]}
					/>
					<FormControlLabel
						value={quizObj["options"][question][2]}
						control={<Radio color="secondary" />}
						label={quizObj["options"][question][2]}
					/>
					<FormControlLabel
						value={quizObj["options"][question][3]}
						control={<Radio color="secondary" />}
						label={quizObj["options"][question][3]}
					/>
				</RadioGroup>
			</FormControl>
		</div>
	);
}

export default QuestionBox;
