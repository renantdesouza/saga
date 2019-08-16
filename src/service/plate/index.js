/**
 * verifies likes, set an attribute in plate (true when plate is liked by user, false if not).
 *
 * @returns Array
 * */
export const mountPlates = (plates = [], platesLikedByUser = []) => {
	plates.forEach(plate => (
		platesLikedByUser.forEach(plateLikedByUser => (
			plate.isLiked = plate._id === plateLikedByUser.plateId
		))
	));
	return plates;
};

/**
 * change the value from like (true to false, or vice versa).
 *
 * @returns plates
 * */
export const refreshLikes = (plates, plateId) => {
	plates.forEach(plate => {
		if (plate._id === plateId) {
			plate.isLiked = !plate.isLiked;
		}
	});
	return plates;
};