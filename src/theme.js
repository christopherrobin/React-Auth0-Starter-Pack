import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import './variables.scss';

// A custom theme for this app
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#00b894',
			contrastText: '#fff',
		},
		secondary: {
			main: '#195a85',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#F3F3F3',
		},
	},
});

export default theme;
