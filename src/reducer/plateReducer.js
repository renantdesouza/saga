import ActionType from '../enumeration/ActionType';

/***
 * Initial State.
 */
const initialState = {
	plates: []
};

/***
 * Execute the action by action.type.
 *
 * @returns {Object}
 */
const plateReducer = (state = initialState, action) => ({
	// actions to deals with token data.
	[ActionType.PLATE.FETCH_SUCCESS]: { ...state, ...action.payload }
})[action.type] || state;

export default plateReducer;