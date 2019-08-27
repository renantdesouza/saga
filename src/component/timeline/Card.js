import React, {useState} from 'react';
import classnames from "classnames";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {connect} from "react-redux";
import {like} from "../../action/likeAction";
import {CircularProgress} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	card: {
		maxWidth: 900,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	actions: {
		display: 'flex',
	},
	expand: {
		transform: 'rotate(0deg)',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
		marginLeft: 'auto',
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

function RecipeReviewCard({ username, plate, like, isLoading, plateId }) {
	const classes = useStyles();

	const onLike = (plateId) => (
		() => {
			like(plateId);
		}
	);

	return (
		<div
			style={{
				marginLeft: 'calc(50% - 450px)',
				marginBottom: '20px'
			}}>
			<Card className={classes.card}>
				<CardHeader
					avatar={
						<Avatar
							aria-label="Recipe"
							className={classes.avatar}>
							{ username ? username.substring(0, 1).toLocaleUpperCase() : '?' }
						</Avatar>
					}
					action={
						<IconButton>
							<MoreVertIcon/>
						</IconButton>
					}
					title={plate.name}
					subheader={new Date(plate.createdAt).toLocaleDateString()}
				/>
				<CardMedia
					className={classes.media}
					image={plate.image}
					title={plate.tooltip}
				/>
				<CardActions className={classes.actions}>
					{
						isLoading && plateId === plate._id?
							<CircularProgress /> :
							<IconButton
								onClick={onLike(plate._id)}
								aria-label="Add to favorites">
								<FavoriteIcon
									style={{
										color: plate.isLiked ? 'red' : ''
									}}/>
							</IconButton>
						}
				</CardActions>
			</Card>
		</div>
	);
}

const mapStateToProps = ({user, plate}) => ({
	username: user.user,
	isLoading: plate.isLoading,
	plateId: plate.plateId,
});

const mapDispatchToProps = (dispatch) => ({
	like: like(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeReviewCard);