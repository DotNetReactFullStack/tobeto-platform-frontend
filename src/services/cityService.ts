import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../core/interceptors/axiosInterceptor";

class CityService extends BaseService
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
        this.apiUrl = BASE_API_URL + "Cities?PageIndex=0&PageSize=1907";
    }

    getByCountryId(countryId: number): Promise<AxiosResponse<any, any>> {
        return axiosInstance.get<any>(
            BASE_API_URL + "Cities/getByCountryId/" + countryId + "?PageIndex=0&PageSize=1907");
        //Cities / getByCountryId /: countryId ? PageIndex = 0 & PageSize=10
    }
}

export default new CityService();