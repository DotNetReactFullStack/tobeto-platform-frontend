import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateAccountSocialMediaPlatformRequest } from "../models/accountSocialMediaPlatforms/createAccountSocialMediaPlatformRequest";

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

  getByFilter() {}
}

export default new AccountSocialMediaPlatformService();
