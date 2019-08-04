import ActionType from '../enumeration/ActionType';

const initialState = {
	beforeLoginPath: '',
};

const historyReducer = (state = initialState, action) => ({
	[ActionType.LOGIN_HISTORY.SET]: { ...state, beforeLoginPath: action.payload },
})[action.type] || state;

export default historyReducer;