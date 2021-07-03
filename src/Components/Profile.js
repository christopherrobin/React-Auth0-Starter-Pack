import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

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
							<Card style={{ margin: '2em 0' }}>
								<CardMedia
									style={{ height: '20vh'}}
									image={profile.picture}
									title="Contemplative Reptile"
								/>
								<CardContent>
									<h1>{profile.name}</h1>
									Nickname
									<h4><em>{profile.nickname}</em></h4>
								</CardContent>
							</Card>

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
