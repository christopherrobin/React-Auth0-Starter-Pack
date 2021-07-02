import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

class Home extends Component {
	render() {
		const { isAuthenticated, getExpiryDate } = this.props.auth;
		return (
			<Container className="homeContainer" id="home-container">
				<Row>
					<Col xs={12}>
						<If condition={isAuthenticated()}>
							<div>
								<h2>Home component</h2>
								<h4>About Your Access Token</h4>
								<p>
									Your <code>access_token</code> has an expiry date of:&nbsp;
									{getExpiryDate()}
								</p>
								<p>
									The token has been scheduled for renewal, but you can also renew it manually from
									the navbar if you don&apos;t want to wait. This manual renewal button is really
									just for demonstration and you probably won&apos;t want such a control
									in your actual application.
								</p>
							</div>
						</If>
					</Col>
				</Row>
			</Container>
		);
	}
}

Home.propTypes = {
	auth: PropTypes.object,
};

export default (Home);
