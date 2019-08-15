import {BaseApi, useMock} from './BaseApi';
import ApiRoute from '../enumeration/ApiRoute';

import * as UserApiMock from './mock/UserApiMock';

/**
 * do login and returns the generated token.
 * */
export const doLogin = ({ user, pass }) => (
	useMock ? UserApiMock.doLogin() : BaseApi.post(ApiRoute.Login.URL, { userName: user, password: pass })
);