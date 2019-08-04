import {put} from 'redux-saga/effects';

import ActionType from "../enumeration/ActionType";

/***
 * Should be used when you want to show loading.
 *
 * @param callback
 * @return {Function}
 */
function sagaFlowExecutor(callback) {
	return function* () {
		try {
			// increment the loading variable to starts or keep the progress bar running.
			yield put({ type: ActionType.LOADING.INCREMENT });

			// execute the other saga.
			yield callback();

			// decrement the loading variable to stop or just decrease the timer for this counter.
			yield put({ type: ActionType.LOADING.DECREMENT });
		} catch (e) {
			// generify errors
			console.log(e);

			yield put({ type: ActionType.ERROR, payload: e });
		}
	}
}

export default sagaFlowExecutor;