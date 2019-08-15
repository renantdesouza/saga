import React, {useState} from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {connect} from "react-redux";

import {doLogin} from "../../action/loginAction";
import t from '../../util/translator';

const useStyles = makeStyles(theme => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white,
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function Login({ doLogin, isLoading }) {
	const classes = useStyles();

	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={ classes.paper }>
				<Avatar className={ classes.avatar }>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					{ t("App.Components.Login.label") }
				</Typography>
				<form className={ classes.form } noValidate>
					<TextField
						disabled={isLoading}
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label={ t("App.Components.Login.fields.email") }
						name="email"
						autoComplete="email"
						autoFocus
						value={username}
						onChange={(e) => setUsername(e.target.value)}/>
					<TextField
						disabled={isLoading}
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label={ t("App.Components.Login.fields.password") }
						type="password"
						id="password"
						autoComplete="current-password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}/>
					<FormControlLabel
						disabled={isLoading}
						control={ <Checkbox value="remember" color="primary" /> }
						label={ t("App.Components.Login.fields.rememberMe") }/>
					<Button
						disabled={isLoading}
						onClick={() => (
							doLogin({
								user: username,
								pass: password
							})
						)}
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}>
						{ t('App.Components.Login.label') }
					</Button>
				</form>
			</div>
		</Container>
	);
}

const mapStateToProps = (state) => ({
	isLoading: state.loading.counter > 0
});

const mapDispatchToProps = (dispatch) => ({
	doLogin: doLogin(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);