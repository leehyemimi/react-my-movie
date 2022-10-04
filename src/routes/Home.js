import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Spinner } from 'react-bootstrap';
import Movie from './../components/Movie';

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
			{
				loading ?
					<div className="region-box">
						<Spinner animation="border" role="status" variant="secondary" >
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					</div>
					: null
			}
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