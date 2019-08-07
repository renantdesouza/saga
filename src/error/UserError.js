import Error from './Error';

export default class UserError extends Error {

	constructor(status, message) {
		super(status, message);
	}

	getType() {
		return 'UserError';
	}

}