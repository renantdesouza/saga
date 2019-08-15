import React, {useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from "./Card";
import {connect} from "react-redux";
import {getPlates} from "../../action/plateAction";

function Index({ plates = [], getPlates }) {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		getPlates();
	}, [getPlates]);

	return (
		<React.Fragment>
			<CssBaseline/>
			<Container maxWidth="lg">
				{
					(plates || []).map((plate, key) => (
						<Card key={key} plate={plate}/>
					))
				}
			</Container>
		</React.Fragment>
	);
}

const mapStateToProps = (state) => {
	console.log('state', state);
	return ({
		plates: state.plate ? state.plate.plates : []
	});
}

const mapDispatchToProps = (dispatch) => ({
	getPlates: getPlates(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps) (Index);
