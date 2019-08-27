import ActionType from "../enumeration/ActionType";

export const like = (dispatch) => (
	(plateId) => {
		console.log('plateId', plateId);
		return dispatch({
			type: ActionType.USER.PLATE.LIKE,
			payload: plateId,
		})
	}
);