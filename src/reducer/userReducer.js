import ActionType from '../enumeration/ActionType';

/***
 * Initial State.
 */
const initialState = {
	username: '',
	password: '',
	token: '',
	isAuthenticated: false,
};

/***
 * Remove password from state when token is received.
 *
 * @returns {Object}
 */
const whenReceiveToken = (state, payload) => {
	const newState = { ...state, ...payload };
	delete newState.pass;
	return newState
};

/***
 * Execute the action by action.type.
 *
 * @returns {Object}
 */
const userReducer = (state = initialState, action) => ({
	// actions to deals with register data.
	[ActionType.USER.REGISTER.FETCH]: { ...state, ...action.payload },
	// actions to deals with login data.
	[ActionType.USER.LOGIN.FETCH]: { ...state, ...action.payload },
	// actions to deals with token data.
	[ActionType.TOKEN.FETCH_SUCCESS]: whenReceiveToken(state, action.payload),
	// actions to remove user from store.
	[ActionType.USER.LOGOUT.FETCH_SUCCESS]: {},
})[action.type] || state;

export default userReducer;