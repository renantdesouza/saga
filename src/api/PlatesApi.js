import {BaseApi, useMock} from "./BaseApi";
import * as UserApiMock from "./mock/UserApiMock";
import ApiRoute from "../enumeration/ApiRoute";

/**
 * get plates liked by user id.
 * */
export const getPlatesByUser = ({ id }) => (
	useMock ? UserApiMock.getPlates() : BaseApi.get(ApiRoute.Users.Plates.URL(id))
);

/**
 * get all plates registered.
 * */
export const getPlates = () => (
	useMock ? UserApiMock.getPlates() : BaseApi.get(ApiRoute.Plates.URL)
);