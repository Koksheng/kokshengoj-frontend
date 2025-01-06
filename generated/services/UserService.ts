/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminPageUserSafetyResponsePaginatedListBaseResponse } from '../models/AdminPageUserSafetyResponsePaginatedListBaseResponse';
import type { Int32BaseResponse } from '../models/Int32BaseResponse';
import type { UpdateUserRequest } from '../models/UpdateUserRequest';
import type { UserLoginRequest } from '../models/UserLoginRequest';
import type { UserRegisterRequest } from '../models/UserRegisterRequest';
import type { UserSafetyResponseBaseResponse } from '../models/UserSafetyResponseBaseResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * @param requestBody
     * @returns Int32BaseResponse Success
     * @throws ApiError
     */
    public static postApiUserUserRegister(
        requestBody?: UserRegisterRequest,
    ): CancelablePromise<Int32BaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/userRegister',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns UserSafetyResponseBaseResponse Success
     * @throws ApiError
     */
    public static postApiUserUserLogin(
        requestBody?: UserLoginRequest,
    ): CancelablePromise<UserSafetyResponseBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/userLogin',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns Int32BaseResponse Success
     * @throws ApiError
     */
    public static postApiUserUserLogout(): CancelablePromise<Int32BaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/userLogout',
        });
    }
    /**
     * @returns UserSafetyResponseBaseResponse Success
     * @throws ApiError
     */
    public static getApiUserGetCurrentUser(): CancelablePromise<UserSafetyResponseBaseResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/getCurrentUser',
        });
    }
    /**
     * @param requestBody
     * @returns Int32BaseResponse Success
     * @throws ApiError
     */
    public static postApiUserUpdateUser(
        requestBody?: UpdateUserRequest,
    ): CancelablePromise<Int32BaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/updateUser',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @param userName
     * @param userAccount
     * @param gender
     * @param userRole
     * @param isDelete
     * @param current
     * @param pageSize
     * @param sortField
     * @param sortOrder
     * @returns AdminPageUserSafetyResponsePaginatedListBaseResponse Success
     * @throws ApiError
     */
    public static getApiUserListUserByPageListPage(
        id?: number,
        userName?: string,
        userAccount?: string,
        gender?: number,
        userRole?: string,
        isDelete?: number,
        current?: number,
        pageSize?: number,
        sortField?: string,
        sortOrder?: string,
    ): CancelablePromise<AdminPageUserSafetyResponsePaginatedListBaseResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/listUserByPage/list/page',
            query: {
                'id': id,
                'userName': userName,
                'userAccount': userAccount,
                'gender': gender,
                'userRole': userRole,
                'isDelete': isDelete,
                'current': current,
                'pageSize': pageSize,
                'sortField': sortField,
                'sortOrder': sortOrder,
            },
        });
    }
}
