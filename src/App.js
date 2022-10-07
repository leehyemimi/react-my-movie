
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="*" element={<div>페이지가 없습니다.</div>} />
			</Routes>
		</>
	);
}

export default App;
