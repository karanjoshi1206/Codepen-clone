import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditorScreen from "./pages/EditorPage";
import Navigation from "./components/Navigation";

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='editor' element={<EditorScreen />} />
			</Routes>
		</>
	);
}

export default App;
