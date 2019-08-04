import {BaseApi, useMock} from './BaseApi';
import ApiRoute from '../enumeration/ApiRoute';

import * as UserApiMock from './mock/UserApiMock';

/**
 * do login and returns the generated token.
 * */
export const doLogin = ({ user, pass }) => (
	useMock ? UserApiMock.doLogin() : BaseApi.post(ApiRoute.Login.URL, { user, pass })
);

/**
 * get the profile`s information.
 * */
export const getFavoritePlates = ({ user, token }) => (
	useMock ? UserApiMock.getFavoritePlates() : BaseApi.get(ApiRoute.Profile.URL, { user, token })
);

/**
 * get the profile`s information.
 * */
export const register = ({ user, pass }) => (
	useMock ? UserApiMock.register() : BaseApi.get(ApiRoute.Register.URL, { user, pass })
);

