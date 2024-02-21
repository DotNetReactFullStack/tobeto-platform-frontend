import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../core/interceptors/axiosInterceptor";

class DistrictService extends BaseService
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
        this.apiUrl = BASE_API_URL + "Districts?PageIndex=0&PageSize=1907";
    }

    getByCityId(cityId: number): Promise<AxiosResponse<any, any>> {
        return axiosInstance.get<any>(
            BASE_API_URL + "Districts/getByCityId/" + cityId + "?PageIndex=0&PageSize=1907");
    }

}

export default new DistrictService();