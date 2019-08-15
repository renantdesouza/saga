import ActionType from "../enumeration/ActionType";

export const getPlates = (dispatch) => {
	return () => {
		dispatch({
			type: ActionType.PLATE.FETCH
		})
	}
};