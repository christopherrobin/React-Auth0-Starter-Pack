import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import './Profile.css';

class Profile extends Component {
	UNSAFE_componentWillMount() {
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
					<Choose>
						<When condition={profile.name}>
							<div>
								<h1>Profile</h1>
								<div><img src={profile.picture} alt="Profile" /></div>
								<h3>{profile.name}</h3>
								<p>Nickname: <em>{profile.nickname}</em></p>
								<pre>{JSON.stringify(profile, null, 2)}</pre>
							</div>
						</When>
						<Otherwise>
							<div className="balls">
								<div></div>
								<div></div>
								<div></div>
							</div>
						</Otherwise>
					</Choose>
				</div>
			</div>
		);
	}
}

Profile.propTypes = {
	auth: PropTypes.object,
};

export default (Profile);
