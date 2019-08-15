import ActionTypes from '../enumeration/ActionType';

/***
 * Initial State.
 */
const initialState = {
	counter: 0,
};

/**
 * Execute the action by action.type.
 *
 * @returns {Object}
 */
const loadingReducer = (state = initialState, action) => ({
	// increments 1 in the loading counter.
	[ActionTypes.LOADING.INCREMENT]: { ...state, counter: state.counter + 1 },
	// decrements 1 in the loading counter.
	[ActionTypes.LOADING.DECREMENT]: { ...state, counter: state.counter - 1 },
})[action.type] || state;

export default loadingReducer;