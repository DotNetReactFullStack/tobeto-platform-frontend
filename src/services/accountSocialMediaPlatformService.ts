import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateAccountSocialMediaPlatformRequest } from "../models/accountSocialMediaPlatforms/createAccountSocialMediaPlatformRequest";
import axiosInstance from "../core/interceptors/axiosInterceptor";

class AccountSocialMediaPlatformService extends BaseService<
  any,
  any,
  CreateAccountSocialMediaPlatformRequest,
  any,
  any,
  any
> {
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "AccountSocialMediaPlatforms";
  }

  // getByFilter() {}
  getListByAccountId(accountId: number): Promise<AxiosResponse<any, any>> {
    return axiosInstance.get<any>(
      this.apiUrl + "/getByAccountId/" + accountId + "?PageIndex=0&PageSize=100"
    );
  }
}

export default new AccountSocialMediaPlatformService();
