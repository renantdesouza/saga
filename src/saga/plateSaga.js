import {call, put, select, takeLatest, all} from 'redux-saga/effects';

import ActionType from '../enumeration/ActionType';
import {getPlatesByUser, getPlates} from '../api/PlatesApi';
import { mountPlates } from '../service/plate/';

import sagaFlowExecutor from './sagaFlowExecutor';

/***
 * Get a part of the state(store) part: user.
 * @returns {Object<username: string, password: string>}
 */
const getUser = (state) => (
	state.user
);

/**
 * Fetch plates from an user.
 *
 * @returns {IterableIterator<CallEffect|PutEffect<{payload: *, type: string}>>}
 */
function* fetchPlate() {
	// get user from stote.
	const user = yield select(getUser);

	const [ {status: platesStatus, data: plates}, {status: platesByUserStatus, data: platesByUser} ] = yield all([
		call(getPlates),
		call(getPlatesByUser, user),
	]);

	// if plates dont returns the correct value.
	if (platesStatus !== 200) {
		yield put({type: ActionType.MESSENGER.SHOW, payload: plates.message});
	// if platesByUser dont returns the correct value.
	} else if (platesByUserStatus !== 200) {
		yield put({ type: ActionType.MESSENGER.SHOW, payload: platesByUser.message });
	// when all fetch's returns correctly.
	} else {
		// set plates in state.
		const mountedPlates = mountPlates(plates, platesByUser);

		yield put({type: ActionType.PLATE.FETCH_SUCCESS, payload: { plates: mountedPlates } });
	}
}

/**
 * Add a watcher to events dispatched with intention of observe loginUser saga
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export function* watchFetchPlates() {
	yield takeLatest(ActionType.PLATE.FETCH, sagaFlowExecutor(fetchPlate))
}
