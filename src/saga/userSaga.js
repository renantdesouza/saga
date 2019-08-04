import {call, put, takeLatest, select,} from 'redux-saga/effects';

import * as UserApi from '../api/UserApi';
import ActionType from '../enumeration/ActionType';

import sagaFlowExecutor from './sagaFlowExecutor';

/**
 * Get a part of the state(store) part:token.
 *
 * @returns {String}
 */
const getToken = (state) => (
	state.token
);

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
	const token = yield call(UserApi.doLogin, user);

	// TODO validate the token before admitting the user is authenticated
	const isAuthenticated = token !== undefined;

	// set token in state.
	yield put({type: ActionType.TOKEN.FETCH_SUCCESS, payload: { ...token, isAuthenticated }});
}

/**
 * Search for userProfile and store user information
 *
 * @returns {IterableIterator<PutEffect<{}>|CallEffect|SelectEffect>}
 */
function* loadUserProfile() {
	// get the token stored in state.
	const token = yield select(getToken);

	// search for the profile from the user.
	const profile = yield call(UserApi.getProfile, {user: 'renanzao da massa', token});

	// set the profile in state
	yield put({type: ActionType.USER.PROFILE.FETCH_SUCCESS, payload: profile});
}

/***
 * Register a new user.
 *
 * @return {IterableIterator<SelectEffect>}
 */
function* registerUser() {
	// get the user sent from register tile.
	const user = yield select(getUser);

	// register new user and respond with a token.
	const token = yield call(UserApi.register, user);

	// TODO validate de token, and send email verification.
	const isRegistered = token !== undefined;

	// set the token in state.
	yield put({type: ActionType.TOKEN.FETCH_SUCCESS, payload: { ...token, isRegistered } });
}

/***
 * Add a watcher to events dispatched with intention of observe registerUser saga.
 *
 * @return {IterableIterator<ForkEffect>}
 */
export function* watchRegister() {
	yield takeLatest(ActionType.USER.REGISTER.FETCH, sagaFlowExecutor(registerUser));
}

/**
 * Add a watcher to events dispatched with intention of observe loginUser saga
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export function* watchLogin() {
	yield takeLatest(ActionType.USER.LOGIN.FETCH, sagaFlowExecutor(loginUser));
}

/**
 * Add a watcher to events dispatched with intention of observe loadUserProfile saga.
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export function* watchLoadUserProfile() {
	yield takeLatest(ActionType.USER.PROFILE.FETCH, sagaFlowExecutor(loadUserProfile));
}