import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";

class SocialMediaPlatformService extends BaseService<
  any,
  any,
  any,
  any,
  any,
  any
> {
  constructor() {
    super();
    this.apiUrl =
      BASE_API_URL + "SocialMediaPlatforms?PageIndex=0&PageSize=2000";
  }

  getByFilter() {}
}

export default new SocialMediaPlatformService();
