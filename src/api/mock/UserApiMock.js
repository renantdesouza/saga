export const doLogin = () => (
	new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				token: "znySqkDH4YJPjvj0tciehA=="
			})
		}, 3000)
	}).then(r => r)
);

export const getPlates = () => (
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(Object.assign({}, {
				name: "Renan Teixeira de Souza",
				nickname: "Revolta",
				address: "73621d9egadasioftscg8890904382uhnp-djasd",
				bio: "I'm Renanzão da massa, but my friends call me a crazy dick",
				avatar: "dhagos8pf[9cdjs-0HGBDFSUOA",
				badges: "dsaliydfpas9dogavsbl",
				karma: "dasdsadsaldo8stufic'd"
			}));
		}, 3000);
	}).then(r => r)
);

export const register = () => (
	new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				token: "znySqkDH4YJPjvj0tciehA=="
			})
		}, 3000)
	}).then(r => r)
);