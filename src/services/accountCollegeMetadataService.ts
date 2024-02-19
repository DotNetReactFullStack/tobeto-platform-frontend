import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateAccountCollegeMetadataRequest } from "../models/accountCollegeMetadatas/createAccountCollegeMetadataRequest";
import axiosInstance from "../core/interceptors/axiosInterceptor";

class AccountCollegeMetadataService extends BaseService<
  any,
  any,
  CreateAccountCollegeMetadataRequest,
  any,
  any,
  any
> {
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "AccountCollegeMetadatas";
  }

  getListByAccountId(accountId: number): Promise<AxiosResponse<any, any>> {
    return axiosInstance.get<any>(
      this.apiUrl + "/getByAccountId/" + accountId + "?PageIndex=0&PageSize=100"
    );
  }
}

export default new AccountCollegeMetadataService();
