import { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./page/Home";
import Detail from "./page/Detail";

function App() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')
			.then((Response) => {
				setMovies(Response.data.data.movies);
				setLoading(false);
			})
			.catch((Error) => { console.log(Error) })
	}, []);

	return (
		<>
			<Routes>
				<Route path="/" element={<Home loading={loading} movies={movies} />} />
				<Route path="/detail/:id" element={<Detail movies={movies} />} />
				<Route path="*" element={<div>빈페이지</div>}></Route>
			</Routes>
		</>
	);
}

export default App;
