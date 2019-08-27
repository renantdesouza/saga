import {call, put, takeLatest, select,} from 'redux-saga/effects';

import * as UserApi from '../api/UserApi';
import ActionType from '../enumeration/ActionType';

import sagaFlowExecutor from './sagaFlowExecutor';

/***
 * Get a part of the state(store) part: user.
 * @returns {Object<username: string, password: string>}
 */
const getUser = (state) => (
	state.user
);

/**
 * Do login and put generated token in store.
 *
 * @returns {IterableIterator<CallEffect|PutEffect<{payload: *, type: string}>>}
 */
function* loginUser() {
	// get the user sent from login tile.
	const user = yield select(getUser);

	// get the token after user been logged in.
	const { status, data } = yield call(UserApi.doLogin, user);

	if (status !== '200') {
		yield put({type: ActionType.MESSENGER.SHOW, payload: data })
	} else {
		const { id, token } = data;
		// set token in state.
		yield put({type: ActionType.TOKEN.FETCH_SUCCESS, payload: { id, token, isAuthenticated: true }});
	}
}

/**
 * Add a watcher to events dispatched with intention of observe loginUser saga
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export function* watchLogin() {
	yield takeLatest(ActionType.USER.LOGIN.FETCH, sagaFlowExecutor(loginUser));
}