const ApiRoute = {
	Api: {
		BASE_API_URL: 'http://localhost:3040',
	},
	Login: {
		URL: '/login',
	},
	Plates: {
		URL: '/plates',
	},
	Users: {
		Plates: {
			URL: (id) => `/users/${id}/plates`
		},
	}
};

export default ApiRoute;