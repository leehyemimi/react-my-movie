import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';

import Movie from './../components/Movie';
import Loading from "../components/Loading";

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	function getMovies() {
		axios.get('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year').then((Response) => {
			setMovies(Response.data.data.movies);
			setLoading(false);
		}).catch((Error) => {
			console.log(Error);
		})
	}

	useEffect(() => {
		getMovies();
	}, []);
	return (
		<Container>
			{loading ? <Loading /> : null}
			<Row>
				{
					movies.map((movies) => {
						return (
							<Movie movies={movies} key={movies.id} />
						)
					})
				}
			</Row>
		</Container>
	)
}

export default Home;