import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Movie({ movies }) {
	const navigate = useNavigate();
	return (
		<Card style={{ width: '18rem' }} onClick={() => { navigate('/detail/' + movies.id) }}>
			<Card.Img variant="top" src={movies.medium_cover_image} />
			<Card.Body>
				<ul className="genres_list">
					{
						movies.genres.map(genres => {
							return (
								<li key={genres}>{genres}</li>
							)
						})
					}
				</ul>
				<Card.Title>{movies.title}</Card.Title>
				<Card.Text>{movies.year}</Card.Text>
				<Card.Text>⭐{movies.rating}</Card.Text>
				<Card.Text>{movies.slug}</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default Movie;