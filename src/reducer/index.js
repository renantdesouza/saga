import {combineReducers} from 'redux';

import user from './userReducer';
import loading from './loadingReducer';
import history from './historyReducer';

const rootReducer = combineReducers({
	user,
	loading,
	history,
});

export default rootReducer;
