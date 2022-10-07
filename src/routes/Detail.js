import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Button } from "react-bootstrap";
import Loading from "../components/Loading";

function Detail() {
	const [loading, setLoading] = useState(true);
	const { id } = useParams();
	const [movie, setMovie] = useState([]);
	function getMovie() {
		axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`).then((Response) => {
			console.log(Response.data.data.movie)
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
		<Container className="detail_box">
			{loading ? <Loading /> : null}
			<Row>
				<Col md={3}>
					<a href={movie.large_cover_image} target="_blank">
						<img src={movie.medium_cover_image} alt={movie.title} />
					</a>
				</Col>
				<Col md={9}>
					<h2>{movie.title}</h2>
					<p>{movie.slug}</p>
					<ul className="detail_info">
						<li>개봉 : {movie.year}</li>
						<li>장르 :
							{
								movie.genres && movie.genres.map(genres => {
									return (
										<span key={genres}> / {genres}</span>
									)
								})
							}
						</li>
						<li>평점 : ⭐{movie.rating} </li>
						<li>추천 : 👍{movie.like_count}</li>
						<li> {movie.description_intro}</li>
						<li>
							<p className="btn_area">
								<Button variant="dark" href={movie.url} target="_blank">go to site</Button>
							</p>
						</li>
					</ul>
				</Col>
			</Row>
		</Container >
	)
}

export default Detail;