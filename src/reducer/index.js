import {combineReducers} from 'redux';

import user from './userReducer';
import loading from './loadingReducer';
import messenger from './messengerReducer';
import plate from './plateReducer';

const rootReducer = combineReducers({
	user,
	loading,
	messenger,
	plate,
});

export default rootReducer;
