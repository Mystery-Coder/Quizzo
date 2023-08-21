import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import PlayQuiz from "./PlayQuiz";
import CreateQuiz from "./CreateQuiz";
import LoadedQuiz from "./LoadedQuiz";
import Results from "./Results";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/playquiz" element={<PlayQuiz />} />
			<Route path="/createquiz" element={<CreateQuiz />} />
			<Route path="/loadedquiz" element={<LoadedQuiz />} />
			<Route path="/results" element={<Results />} />
		</Routes>
	);
}

export default App;
