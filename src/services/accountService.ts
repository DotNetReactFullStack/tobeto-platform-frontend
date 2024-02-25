import { an } from "@fullcalendar/core/internal-common";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../core/interceptors/axiosInterceptor";
import { AxiosResponse } from "axios";
import { UpdateAccountRequest } from "../models/account/updateAccountRequest";

class AccountService extends BaseService
    <
        any,
        any,
        any,
        any,
        any,
        any
    > {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "Accounts";
    }

    getByUserId(id: number): Promise<AxiosResponse<any, any>> {
        return axiosInstance.get<any>(this.apiUrl + "/getByUserId/" + id);
    }

    updateAccountInformation(
        request: UpdateAccountRequest,
    ): Promise<AxiosResponse<UpdateAccountRequest, any>> {
        return axiosInstance.put<UpdateAccountRequest>(this.apiUrl + "/updateAccountInformation", request);
    }

}

export default new AccountService();