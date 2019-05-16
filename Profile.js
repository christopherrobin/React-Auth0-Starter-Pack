import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Profile.css';

class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
        {
          profile.name ?
          <div>
            <h2>Profile component</h2>
            <h3>{profile.name}</h3>
            <img src={profile.picture} alt="profile" />
            <h3>Nickname: {profile.nickname}</h3>
            <pre>{JSON.stringify(profile, null, 2)}</pre>
          </div>
          :
          <Row>
            <Col>
              <div className="balls-container">
                <div className="balls">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </Col>
          </Row>
        }
        </div>
      </div>
    );
  }
}

export default (Profile);
