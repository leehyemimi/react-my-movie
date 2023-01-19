
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Detail({ movies }) {
	let navigate = useNavigate();
	let { id } = useParams();
	let item = movies.find((x) => x.id == id);
	return (
		<div className="detail-box">
			<Container>
				<Row>
					<Col sm={4}><img src={item.medium_cover_image} alt="" /></Col>
					<Col sm={8}>
						<dl>
							<dt className="mb-2">{item.title}</dt>
							<dd>개봉년도 :&nbsp;{item.year}</dd>
							<dd>평점 :&nbsp;{item.rating}</dd>
							<dd>장르 :&nbsp;
								{
									item.genres.map(genre => genre)
								}
							</dd>
							<dd>
								<Button variant="dark" onClick={() => { navigate(item.url) }}>자세히보기</Button>
							</dd>
						</dl>
					</Col>
				</Row>
				<Row className="mt-5">
					<Col>
						{item.summary}
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Detail;
