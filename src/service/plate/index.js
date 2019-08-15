/**
 * verifies likes, set an attribute in plate (true when plate is liked by user, false if not).
 *
 * @returns plates
 * */
export const mountPlates = (plates = [], platesLikedByUser = []) => {
	plates.forEach(plate => (
		platesLikedByUser.forEach(plateLikedByUser => (
			plate.isLiked = plate._id === plateLikedByUser.plateId
		))
	));
	return plates;
};