import React from 'react';
import { Spinner } from "react-bootstrap";

function Loading() {
	return (
		<div className="region-box">
			<Spinner animation="border" role="status" variant="secondary" >
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		</div>
	)
}

export default Loading;