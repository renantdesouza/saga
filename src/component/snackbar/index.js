import React from "react";
import clsx from "clsx";
import ErrorIcon from "@material-ui/icons/Error";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import {makeStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import {hideMessage} from "../../action/feedbackAction";

const useStyles = makeStyles(theme => ({
	error: {
		backgroundColor: theme.palette.error.dark
	},
	icon: {
		fontSize: 20
	},
	iconVariant: {
		opacity: 0.9,
		marginRight: theme.spacing(1)
	},
	message: {
		display: "flex",
		alignItems: "center"
	}
}));

function CustomizedSnackbars({message, hideSnackbar}) {
	const classes = useStyles();

	return (
		<div>
			<Snackbar
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left"
				}}
				open={!!message}
				autoHideDuration={6000}
				onClose={(event, reason) => reason !== 'clickaway' && hideSnackbar()}>
				<SnackbarContent
					className={clsx(classes['error'])}
					aria-describedby="client-snackbar"
					message={
						<span id="client-snackbar" className={classes.message}>
              <ErrorIcon className={clsx(classes.icon, classes.iconVariant)}/>
              {message}
            </span>
					}
					action={[
						<IconButton
							key="close"
							aria-label="close"
							color="inherit"
							onClick={hideSnackbar}>
							<CloseIcon className={classes.icon}/>
						</IconButton>
					]}
				/>
			</Snackbar>
		</div>
	);
}

const mapStateToProps = (state) => ({
	message: state.messenger && state.messenger.message,
});

const mapDispatchToProps = (dispatch) => ({
	hideSnackbar: hideMessage(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomizedSnackbars);
