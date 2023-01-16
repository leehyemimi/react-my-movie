import { useEffect, useState } from "react";
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap';
import Movie from "./components/Movie";
import './App.css';

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
		<div className="App">
			{loading ? <h2>로딩중...</h2> : null}
			<Container>
				<Row>
					{movies.map((movie, i) =>
						<Col sm key={movie.id}>
							<Movie movie={movie} />
						</Col>
					)}
				</Row>
			</Container>
		</div>
	);
}

export default App;
