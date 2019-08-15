import ActionType from "../enumeration/ActionType";

export const showMessage = (dispatch) => {
	return (message) => {
		dispatch({
			type: ActionType.MESSENGER.SHOW,
			payload: message,
		})
	}
};

export const hideMessage = (dispatch) => {
	return () => (
		dispatch({
			type: ActionType.MESSENGER.HIDE
		})
	)
};