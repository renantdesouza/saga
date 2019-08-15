import { all } from 'redux-saga/effects';

import {
	watchLogin,
} from './userSaga';

import {
	watchFetchPlates
} from './plateSaga';

function* rootSaga() {
	// register all sagas to watch all events dispatchs to saga
	yield all([
		watchLogin(),
		watchFetchPlates(),
	]);
}

export default rootSaga;
