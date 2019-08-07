export default class Error {

	constructor(status, message) {
		const type = !!this.getType() ? `${this.getType()}: ` : '';

		this.status = status;
		this.message = `${type}${message}`;
	}

	getType() {}

}