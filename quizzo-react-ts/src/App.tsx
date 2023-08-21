import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import CreateQuiz from "./CreateQuiz";
import LoadedQuiz from "./LoadedQuiz";
import Results from "./Results";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route path="/createquiz" element={<CreateQuiz />} />
			<Route path="/loadedquiz" element={<LoadedQuiz />} />
			<Route path="/results" element={<Results />} />
			<Route path="*" element={<p>Error: Page Not Found</p>} />
		</Routes>
	);
}

export default App;
