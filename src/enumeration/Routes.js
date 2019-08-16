import React from 'react';

import {Route} from "react-router-dom";

import Login from '../component/login';
import Plate from '../component/timeline';

export const PageRoutes = {
	LOGIN: {
		path: '/login',
		component: Login,
		isAuthenticationRequired: false,
	},
	PLATE: {
		path: '/plate',
		component: Plate,
		isAuthenticationRequired: true,
	}
};

export const isAuthenticationRequired = (path) => (
	Object.keys(PageRoutes).map(key => PageRoutes[key]).find(route => route.path === path)
);

export default () => (
	Object.keys(PageRoutes).map((key) => {
		const route = PageRoutes[key];

		return <Route key={key} path={route.path} component={route.component}/>
	})
);