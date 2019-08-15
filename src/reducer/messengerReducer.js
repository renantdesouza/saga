import ActionType from "../enumeration/ActionType";

/***
 * Initial State.
 */
const initialState = {
	messenger: {
		message: ''
	},
};

/**
 * Execute the action by action.type.
 *
 * @returns {Object}
 */
const messengerReducer = (state = initialState, action) => ({
	// show a message in messenger.
	[ActionType.MESSENGER.SHOW]: { ...state, ...action.payload },
	// hide the messenger.
	[ActionType.MESSENGER.HIDE]: { ...state, message: '' },
})[action.type] || state;

export default messengerReducer;