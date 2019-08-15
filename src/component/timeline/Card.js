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

function RecipeReviewCard({ username, plate }) {
	const classes = useStyles();

	const [isExpanded, setIsExpanded] = useState(false);
	const [isClicked, setIsClicked] = useState(plate.isLiked);

	return (
		<div
			style={{
				marginLeft: 'calc(50% - 450px)',
				marginBottom: '20px'
			}}>
			<Card className={classes.card}>
				<CardHeader
					avatar={<Avatar aria-label="Recipe" className={classes.avatar}> { username ? username.substring(0, 1).toLocaleUpperCase() : '?' } </Avatar>}
					action={
						// TODO ADD THE SAVE FUNCTION
						<IconButton>
							<MoreVertIcon/>
						</IconButton>
					}
					title="Shrimp and Chorizo Paella"
					subheader="September 14, 2016"
				/>
				<CardMedia
					className={classes.media}
					image="https://conteudo.imguol.com.br/c/esporte/ec/2018/07/18/rodriguinho-comemora-com-romero-o-gol-marcado-pelo-corinthians-contra-o-botafogo-1531963095307_300x200.jpg"
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography component="p">
						This impressive paella is a perfect party dish and a fun meal to cook together with
						your guests. Add 1 cup of frozen peas along with the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions className={classes.actions}>
					<IconButton
						onClick={() => setIsClicked(!isClicked)}
						aria-label="Add to favorites">
						<FavoriteIcon
							style={{color: isClicked ? 'red' : ''}}/>
					</IconButton>
					<IconButton
						className={classnames(classes.expand, {
							[classes.expandOpen]: isExpanded,
						})}
						onClick={() => setIsExpanded(!isExpanded)}
						aria-expanded={isExpanded}
						aria-label="Show more"
					>
						<ExpandMoreIcon/>
					</IconButton>
				</CardActions>
				<Collapse in={isExpanded} timeout="auto" unmountOnExit>
					<CardContent>
						<Typography paragraph variant="body2">
							Method:
						</Typography>
						<Typography paragraph>
							Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
							minutes.
						</Typography>
						<Typography paragraph>
							Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
							heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
							browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
							chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
							salt and pepper, and cook, stirring often until thickened and fragrant, about 10
							minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
						</Typography>
						<Typography paragraph>
							Add rice and stir very gently to distribute. Top with artichokes and peppers, and
							cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
							Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
							the rice, and cook again without stirring, until mussels have opened and rice is
							just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
						</Typography>
						<Typography>
							Set aside off of the heat to let rest for 10 minutes, and then serve.
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</div>
	);
}

const mapStateToProps = ({user}) => ({
	username: user.user,
});

	export default connect(mapStateToProps, null)(RecipeReviewCard);