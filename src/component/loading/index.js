import React from 'react';

import {connect} from "react-redux";

import CircularProgress from '@material-ui/core/CircularProgress';

import './Loading.css';

function Loading ({isLoading}) {
	return isLoading && (
		<div className='loading-container'>
			<CircularProgress className='progress' />
		</div>
	);
}

const mapStateToProps = (state) => ({
	isLoading: (state.loading.counter > 0)
});

export default connect(mapStateToProps, null)(Loading);