import ActionType from '../enumeration/ActionType';

/***
 * Initial State.
 */
const initialState = {
	plates: [],
	plateId: '',
	isLoading: false,
};

/***
 * Execute the action by action.type.
 *
 * @returns {Object}
 */
const plateReducer = (state = initialState, action) => ({
	// actions to deals with token data.
	[ActionType.PLATE.FETCH_SUCCESS]: { ...state, ...action.payload },
	[ActionType.USER.PLATE.LIKE]: { ...state, plateId: action.payload },
	[ActionType.USER.PLATE.LIKE_LOADING_START]: {...state, isLoading: action.payload },
	[ActionType.USER.PLATE.LIKE_LOADING_STOP]: {...state, isLoading: action.payload },
})[action.type] || state;

export default plateReducer;