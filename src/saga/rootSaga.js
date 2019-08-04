import { all } from 'redux-saga/effects';

import {
	watchLogin,
} from './userSaga';

function* rootSaga() {
	// register all sagas to watch all events dispatchs to saga
	yield all([
		watchLogin(),
	]);
}

export default rootSaga;
