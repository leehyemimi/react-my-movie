
import { useParams } from 'react-router-dom';

function Detail({ movies }) {
	const params = useParams();
	return (
		<div className="detail-box">
			<h1>{movies.title}</h1>
		</div>
	);
}

export default Detail;
