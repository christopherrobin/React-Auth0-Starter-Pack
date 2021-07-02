import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import Button from '@material-ui/core/Button';
import './App.scss';

class App extends Component {
	goTo(route) {
		this.props.history.replace(`/${route}`);
	}

	login() {
		this.props.auth.login();
	}

	logout() {
		this.props.auth.logout();
	}

	renewToken() {
		const { renewSession } = this.props.auth;
		renewSession();
	}

	componentDidMount() {
		const { renewSession } = this.props.auth;
		if (localStorage.getItem('isLoggedIn') === 'true') {
			renewSession();
		}
	}

	render() {
		const { pathname } = this.props.location;
		const { isAuthenticated } = this.props.auth;
		const loggedIn = isAuthenticated();
		return (
			<Container id="Header-Container">
				<Row>
					<Col xs={12}>
						<h1 className="header">Auth0-React Starter Pack</h1>
						<Choose>
							<When condition={loggedIn}>
								<Button
									color="primary"
									variant="contained"
									disableElevation
									onClick={this.goTo.bind(this, 'home')}
									disabled={pathname === '/home'}
								>
									Home
								</Button>

								<Button
									id="dashboard-button"
									color="primary"
									variant="contained"
									disableElevation
									onClick={this.goTo.bind(this, 'dashboard')}
									disabled={pathname === '/dashboard'}
								>
									Dashboard
								</Button>
								<Button
									color="primary"
									variant="contained"
									disableElevation
									onClick={this.goTo.bind(this, 'profile')}
									disabled={pathname === '/profile'}
								>
									Profile
								</Button>
								<Button
									id="qsLogoutBtn"
									color="primary"
									variant="contained"
									disableElevation
									onClick={this.logout.bind(this)}
									style={{ marginRight: 0 }}
								>
									Log Out
								</Button>
							</When>
							<Otherwise>
								<Button
									id="log-in-button"
									color="primary"
									variant="contained"
									disableElevation
									onClick={this.login.bind(this)}
								>
									Log In
								</Button>
							</Otherwise>
						</Choose>
					</Col>
				</Row>
			</Container>
		);
	}
}

App.propTypes = {
	history: PropTypes.object,
	auth: PropTypes.object,
	location: PropTypes.object,
};

export default (App);
