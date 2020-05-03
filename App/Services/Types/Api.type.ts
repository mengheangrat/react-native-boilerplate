import {ApiErrorResponse, ApiOkResponse} from 'apisauce';

export type ApiResponse<T> = ApiErrorResponse<T> | ApiOkResponse<T>;
