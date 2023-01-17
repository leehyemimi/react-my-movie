import { Row, Col, Container } from 'react-bootstrap';
import Movie from "./../components/Movie";

function Home({ loading, movies }) {
	return (
		<>
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
		</>
	);
}

export default Home;
