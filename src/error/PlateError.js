import Error from './Error';

export default class PlateError extends Error {

	constructor(status, message) {
		super(status, message);
	}

	getType() {
		return 'PlateError';
	}

}