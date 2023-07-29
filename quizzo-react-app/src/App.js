import { useState, useRef } from "react";

function App() {
	const inputRef = useRef();
	return (
		<div>
			<h1>Quizzo - Play and Make Your Own Quizzes</h1>
			<br />
			<input placeholder="Enter Quiz Name" ref={inputRef} /> <br />
			<button onClick={() => console.log(inputRef.current.value)}>
				Play Quiz
			</button>
			<button onClick={() => console.log(inputRef.current.value)}>
				Create New Quiz
			</button>
		</div>
	);
}

export default App;
