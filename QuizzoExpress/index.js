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

app.post("/quizzo/post_quiz", async function (req, res) {
	let quiz_name = req.body.quiz_name;

	let data = await readFileSync("quizzo_db.json");
	data = JSON.parse(data);

	data[quiz_name] = req.body.questions;

	await writeFileSync("quizzo_db.json", JSON.stringify(data, null, 4));

	res.json({
		status: "OK",
	});
});

app.listen(process.env.PORT || PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
