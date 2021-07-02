import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Dashboard from './Components/Dashboard';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
	if (/access_token|id_token|error/.test(location.hash)) {
		auth.handleAuthentication();
	}
};

export const makeMainRoutes = () => {
	return (
		<Router history={history}>
			<div>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Route path="/" render={props => <App auth={auth} {...props} />} />
					<Route path="/home" render={props => <Home auth={auth} {...props} />} />
					<Route path="/dashboard"
						render={props => <Dashboard auth={auth} {...props} testProp="testProp123" />} />
					<Route
						path="/profile"
						render={props =>
						// TODO: move validation into profile component using <If></If>
						// eslint-disable-next-line jsx-control-statements/jsx-use-if-tag
							!auth.isAuthenticated()
								? <Redirect to="/home" />
								: <Profile auth={auth} {...props} />}
					/>
					<Route
						path="/callback"
						render={props => {
							handleAuthentication(props);
							return <Callback {...props} />;
						}}
					/>
				</ThemeProvider>
			</div>
		</Router>
	);
};
