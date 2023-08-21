import express from "express";
import { readFileSync, writeFileSync } from "fs";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

app.get("/quizzo/get_quiz/:quizname", async function (req, res) {
	let quizname = req.params.quizname;

	let data = await readFileSync("quizzo_db.json");
	data = JSON.parse(data);
	let quiz_data = data[quizname];

	if (quiz_data) {
		res.send({
			data: quiz_data,
			exists: true,
		});
	} else {
		res.send({
			exists: false, //does not exist
		});
	}
});

app.get("/quizzo/get_quiznames", async function (req, res) {
	let data = await readFileSync("quizzo_db.json");
	data = JSON.parse(data);

	let quizNames = Object.keys(data);

	res.send({ quizNames });
});
//Incoming data is like this,
// {
// 	"quizName" : "newQuiz",
// 	"data" : {
// 		"Q1" : "A1",
// 		"Q2" : "A2",
// 		"options" : {
// 			"Q1" : ["A", "A1", "C", "D"],
// 			"Q2" : ["A2", "B", "C", "D"]
// 		}
// 	}
// }

app.post("/quizzo/post_quiz", async function (req, res) {
	let quizName = req.body.quizName;
	let quizObj = req.body.data;

	let data = await readFileSync("quizzo_db.json");
	data = JSON.parse(data);

	data[quizName] = quizObj;

	await writeFileSync("quizzo_db.json", JSON.stringify(data, null, 4));

	res.json({
		status: "OK",
	});
});

app.listen(process.env.PORT || PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
