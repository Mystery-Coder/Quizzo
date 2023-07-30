import { useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import PlayQuiz from "./PlayQuiz";
import CreateQuiz from "./CreateQuiz";
function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/playquiz" element={<PlayQuiz />} />
			<Route path="/createquiz" element={<CreateQuiz />} />
		</Routes>
	);
}

export default App;
