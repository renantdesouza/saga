import ActionType from "../enumeration/ActionType";

export const getPlates = (dispatch) => (
	() => (
		dispatch({
			type: ActionType.PLATE.FETCH
		})
	)
);
