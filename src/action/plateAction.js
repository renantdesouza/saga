import ActionType from "../enumeration/ActionType";

export const getPlates = (dispatch) => (
	() => (
		dispatch({
			type: ActionType.PLATE.FETCH
		})
	)
);

export const loadingLikeStart = (dispatch) => (
	() => (
		dispatch({
			type: ActionType.USER.PLATE.LIKE_LOADING_START,
			payload: true,
		})
	)
);

export const loadingLikeStop = (dispatch) => (
	() => (
		dispatch({
			type: ActionType.USER.PLATE.LIKE_LOADING_STOP,
			payload: false,
		})
	)
);