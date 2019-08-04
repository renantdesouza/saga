import ActionType from "../enumeration/ActionType";

export const doLogin = (dispatch) => {
	return (user) => {
		dispatch({
			type: ActionType.USER.LOGIN.FETCH,
			payload: user
		})
	}
};