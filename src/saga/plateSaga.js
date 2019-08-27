import {all, call, put, select, takeLatest} from 'redux-saga/effects';

import ActionType from '../enumeration/ActionType';
import {getPlates as fetchPlates, getPlatesByUser, likePlate} from '../api/PlatesApi';
import {mountPlates, refreshLikes} from '../service/plate/';



import sagaFlowExecutor from './sagaFlowExecutor';

/**
 * Fetch plates from an user.
 *
 * @returns {IterableIterator<CallEffect|PutEffect<{payload: *, type: string}>>}
 */

function getUser(state) {

	return state.user;
}

function getPlateId(state) {

	return state.plate.plateIds;
}
function getPlate(state) {

	return state.plate.plates;
}
function* fetchPlate() {
	const {data} = yield call(fetchPlates);
	const user = yield select(getUser);
	const likedPlates = yield  call(getPlatesByUser, user);
	console.log("segue likedPlates => @@@@WWWWWW@@WWW", likedPlates)

	yield put({
		type: ActionType.PLATE.FETCH_SUCCESS,
		payload: {plates: mountPlates(data, likedPlates.data)}
	})

}

/**
 *
 * @returns {IterableIterator<PutEffect<{payload: *, type: *}>|SelectEffect|CallEffect|PutEffect<{payload: boolean, type: *}>|PutEffect<{payload: {plates: *}, type: *}>>}
 */
function* likeSaga() {
	const user = yield select(getUser);
	const plateId = yield select(getPlateId)
	console.log('plateId', plateId);
	const likePlates = yield call(likePlate, {userId: user.id, plateId: plateId})
	const plates = yield select(getPlate)

	console.log(likePlates)
	yield put({
		type: ActionType.PLATE.FETCH_SUCCESS,
		payload: {plates: refreshLikes(plates, plateId)}
	})
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