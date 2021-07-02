import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const DashboardComponent = () => {
	return (
		<Container>
			<Row>
				<Col xs={12}>
					<h1>Dashboard</h1>
					<p>This is your dashboard page.</p>
				</Col>
			</Row>
		</Container>
	);
};

export default (DashboardComponent);
