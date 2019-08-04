import ActionTypes from '../enumeration/ActionType';

const initialState = {
	counter: 0,
};

const loadingReducer = (state = initialState, action) => ({
	[ActionTypes.LOADING.INCREMENT]: { ...state, counter: state.counter + 1 },
	[ActionTypes.LOADING.DECREMENT]: { ...state, counter: state.counter - 1 },
})[action.type] || state;

export default loadingReducer;