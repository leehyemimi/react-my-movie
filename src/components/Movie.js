import { Button, Card, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Movie({ movie }) {
	const navigate = useNavigate();
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src={movie.medium_cover_image} />
			<Card.Body>
				<Card.Title>[{movie.year}] {movie.title}</Card.Title>
				<Card.Text>{movie.slug}</Card.Text>
				<Card.Text>
					{
						movie.genres.map((genre) =>
							<Badge pill bg="secondary">{genre}</Badge>
						)
					}
				</Card.Text>
				<Button variant="dark" onClick={() => { navigate('/detail/' + movie.id) }}>자세히 보기</Button>
			</Card.Body>
		</Card>
	);
}

export default Movie;
