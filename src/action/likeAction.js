import ActionType from "../enumeration/ActionType";

export const like = (dispatch) => (
	(plateId) => (
		dispatch({
			type: ActionType.USER.PLATE.LIKE,
			payload: plateId,
		})
	)
);