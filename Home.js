import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Home extends Component {
  render() {
    const { isAuthenticated, getExpiryDate } = this.props.auth;
    return (
      <Grid className="homeContainer" id="home-container">
        <Row>
          <Col xs={12}>
            {
              isAuthenticated() ?
                <div>
                  <h2>Home component</h2>
                  <h4>About Your Access Token</h4>
                  <p>
                    Your <code>access_token</code> has an expiry date of:{' '}
                    {getExpiryDate()}
                  </p>
                  <p>
                    The token has been scheduled for renewal, but you can also renew it manually from the navbar
                    if you don't want to wait. This manual renewal button is really
                    just for demonstration and you probably won't want such a control
                    in your actual application.
            </p>
                </div>
                :
                null
            }
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default (Home);
