import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateExperienceCommand } from "../models/experiences/createExperienceCommand";
import axiosInstance from "../core/interceptors/axiosInterceptor";

class ExperienceService extends BaseService
    <
        any,
        any,
        CreateExperienceCommand,
        any,
        any,
        any
    > {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "Experiences";
    }

    getListByAccountId(accountId: number): Promise<AxiosResponse<any, any>> {
        return axiosInstance.get<any>(this.apiUrl + "/getByAccountId/" + accountId + "?PageIndex=0&PageSize=100");
    }
}

export default new ExperienceService();