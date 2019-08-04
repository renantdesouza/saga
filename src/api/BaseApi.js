import ApiRoute from '../enumeration/ApiRoute';
import HttpMethod from '../enumeration/HttpMethod';

const headers = new Headers({
	"Content-Type": "text/plain",
	"X-Custom-Header": "ProcessThisImmediately",
});

const config = (method) => ({
	method: method,
	headers: headers,
	mode: 'cors',
	cache: 'default'
});

export const useMock = process.env.NODE_ENV !== 'production';

export const BaseApi = {
	'get': (url) => (
		fetch(`${ApiRoute.BASE_API_URL}/${url}`, config(HttpMethod.GET))
			.then(response => response)
	),
	'post': (url, body) => (
		fetch(`${ApiRoute.BASE_API_URL}/${url}`, config(HttpMethod.POST), body)
			.then(response => response)
	),
	'put': (url, body) => (
		fetch(`${ApiRoute.BASE_API_URL}/${url}`, config(HttpMethod.PUT), body)
			.then(response => response)
	),
	'patch': (url, body) => (
		fetch(`${ApiRoute.BASE_API_URL}/${url}`, config(HttpMethod.PATCH), body)
			.then(response => response)
	),
	'delete': (url, body) => (
		fetch(`${ApiRoute.BASE_API_URL}/${url}`, config(HttpMethod.DELETE), body)
			.then(response => response)
	)
};