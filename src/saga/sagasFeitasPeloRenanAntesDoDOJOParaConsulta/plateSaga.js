import {all, call, put, select, takeLatest} from 'redux-saga/effects';

import ActionType from '../enumeration/ActionType';
import {getPlates as fetchPlates, getPlatesByUser, likePlate} from '../api/PlatesApi';
import {mountPlates, refreshLikes} from '../service/plate/';

import sagaFlowExecutor from './sagaFlowExecutor';

/***
 * Get a part of the state(store) part: user.
 * @returns {Object<username: string, password: string>}
 */
const getUser = (state) => (
	state.user
);

const getPlateId = (state) => (
	state.plate.plateId
);

const getPlates = (state) => (
	state.plate.plates
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
		call(fetchPlates),
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
		yield put({type: ActionType.PLATE.FETCH_SUCCESS, payload: { plates: mountPlates(plates, platesByUser) } });
	}
}

/**
 *
 * @returns {IterableIterator<PutEffect<{payload: *, type: *}>|SelectEffect|CallEffect|PutEffect<{payload: boolean, type: *}>|PutEffect<{payload: {plates: *}, type: *}>>}
 */
function* likeSaga() {
	yield put({type: ActionType.USER.PLATE.LIKE_LOADING_START, payload: true, });

	// get items from store.
	const [ plateId, user, plates ] = yield all([
		select(getPlateId),
		select(getUser),
		select(getPlates)
	]);

	const {status, data} = yield call(likePlate, user.id, plateId);

	if (status !== 200) {
		yield put({type: ActionType.MESSENGER.SHOW, payload: data.message});
	} else {
		yield put({type: ActionType.PLATE.FETCH_SUCCESS, payload: { plates: refreshLikes(plates, plateId) } });
	}

	yield put({type: ActionType.USER.PLATE.LIKE_LOADING_STOP, payload: false, });
}

/**
 * Add a watcher to events dispatched with intention of observe fetchPlate saga.
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export function* watchFetchPlates() {
	yield takeLatest(ActionType.PLATE.FETCH, sagaFlowExecutor(fetchPlate));
}

/**
 * Add a watcher to events dispatched with intention of observe like saga.
 * @returns {IterableIterator<any>}
 */
export function* watchLikePlate() {
	yield takeLatest(ActionType.USER.PLATE.LIKE, likeSaga);
}