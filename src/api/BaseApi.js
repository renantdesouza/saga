import ApiRoute from '../enumeration/ApiRoute';
import HttpMethod from '../enumeration/HttpMethod';

const headers = new Headers({
	'Accept': 'application/json',
	'Content-Type': 'application/json'
});

const config = (method, body) => ({
	method: method,
	headers: headers,
	mode: 'cors',
	cache: 'default',
	body: body ? JSON.stringify(body) : undefined,
});

const getConfig = () => (
	config(HttpMethod.GET)
);

const postConfig = (body) => (
	config(HttpMethod.POST, body)
);

const putConfig = (body) => (
	config(HttpMethod.PUT, body)
);

const patchConfig = (body) => (
	config(HttpMethod.PATCH, body)
);

const deleteConfig = (body) => (
	config(HttpMethod.PUT, body)
);

// export const useMock = process.env.NODE_ENV !== 'production';
export const useMock = false;

export const BaseApi = {
	'get': (url) => (
		fetch(`${ApiRoute.Api.BASE_API_URL}${url}`, getConfig())
			.then(response => response.ok && response.json())
	),
	'post': (url, body) => (
		fetch(`${ApiRoute.Api.BASE_API_URL}${url}`, postConfig(body))
			.then(response => response.ok && response.json())
	),
	'put': (url, body) => (
		fetch(`${ApiRoute.Api.BASE_API_URL}/${url}`, putConfig(body))
			.then(response => response)
	),
	'patch': (url, body) => (
		fetch(`${ApiRoute.Api.BASE_API_URL}/${url}`, patchConfig(body))
			.then(response => response)
	),
	'delete': (url, body) => (
		fetch(`${ApiRoute.Api.BASE_API_URL}/${url}`, deleteConfig(body))
			.then(response => response)
	)
};