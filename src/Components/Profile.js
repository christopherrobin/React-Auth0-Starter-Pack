import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import './Profile.css';

const Profile = props => {
	const [profile, setProfile] = useState({});

	const { userProfile, getProfile } = props.auth;

	const fetchProfile = () => {
		if (!userProfile) {
			getProfile((err, profile) => {
				setProfile(profile);
			});
		} else {
			setProfile(userProfile);
		}
	};

	useEffect(() => {
		fetchProfile();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
};

Profile.propTypes = {
	auth: PropTypes.object,
};

export default (Profile);
