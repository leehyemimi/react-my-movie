
import './App.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import Home from "./routes/Home";
import Detail from "./components/Detail";


function App() {
	const navigate = useNavigate();
	return (
		<>
			<Navbar bg="light">
				<Container>
					<Navbar.Brand onClick={() => { navigate('/') }}>HOME</Navbar.Brand>
				</Container>
			</Navbar>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="*" element={<div>페이지가없습니다.</div>} />
			</Routes>
		</>
	);
}

export default App;
