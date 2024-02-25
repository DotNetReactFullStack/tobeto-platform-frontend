import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../core/interceptors/axiosInterceptor";
import { UpdateAddressRequest } from "../models/address/updateAddressRequest";

class AddressService extends BaseService
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
        this.apiUrl = BASE_API_URL + "Addresses?PageIndex=0&PageSize=20000";
    }

    updateAddressInformation(
        request: UpdateAddressRequest,
    ): Promise<AxiosResponse<UpdateAddressRequest, any>> {
        return axiosInstance.put<UpdateAddressRequest>(BASE_API_URL + "Addresses/updateAddressInformation", request);
    }
}

export default new AddressService();