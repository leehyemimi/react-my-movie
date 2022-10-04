import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";

function Detail() {
	const [loading, setLoading] = useState(true);
	const { id } = useParams();
	const [movie, setMovie] = useState([]);
	function getMovie() {
		axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`).then((Response) => {
			setMovie(Response.data.data.movie);
			setLoading(false);
		}).catch((Error) => {
			console.log(Error);
		})
	}

	useEffect(() => {
		getMovie();
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
				<Col md={4}>
					<img src={movie.medium_cover_image} alt={movie.title} />
					<p className="btn_area">
						<Button variant="dark" href={movie.url} target="_blank">go to site</Button>
					</p>
				</Col>
				<Col md={8}>
					<ul className="genres_list">
						{
							movie.genres && movie.genres.map(genres => {
								return (
									<li key={genres}>{genres}</li>
								)
							})
						}
					</ul>
					<h2>{movie.title}</h2>
					<p>{movie.slug}</p>
					<ul className="detail_info">
						<li>{movie.year}</li>
						<li>⭐{movie.rating} /👍{movie.like_count}</li>
						<li>{movie.description_intro}</li>
					</ul>
				</Col>
			</Row>
		</Container>
	)
}

export default Detail;