import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './App.css';

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
    const { isAuthenticated } = this.props.auth;
    return (
      <Grid id="Header-Container">
        <Row>
          <Col xs={12}>
            <h1 className="blue">Auth0-React Starter Pack</h1>
            {isAuthenticated() &&
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'home')}
              >
              Home
          </Button>}
            {isAuthenticated() &&
              <Button
                id="dashboard-button"
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'dashboard')}
              >
              Dashboard
          </Button>}
            {isAuthenticated() &&
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'profile')}
              >
              Profile
          </Button>}
            {isAuthenticated() &&
              <Button
                id="qsLogoutBtn"
                bsStyle="primary"
                className="btn-margin"
                onClick={this.logout.bind(this)}
              >
              Log Out
          </Button>}
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            {!isAuthenticated() &&
              <Button
                id="log-in-button"
                bsStyle="primary"
                className="btn-margin"
                onClick={this.login.bind(this)}
              >
              Log In
          </Button>}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default (App);
