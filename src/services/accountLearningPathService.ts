import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../core/interceptors/axiosInterceptor";

class AccountLearningPathService extends BaseService<
  any,
  any,
  any,
  any,
  any,
  any
> {
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "AccountLearningPaths";
  }

  // getByFilter() {}
  getListByAccountId(accountId: number): Promise<AxiosResponse<any, any>> {
    return axiosInstance.get<any>(
      this.apiUrl + "/getByAccountId/" + accountId + "?PageIndex=0&PageSize=100"
    );
  }

  getListByLearningPathId(
    learningPathId: number
  ): Promise<AxiosResponse<any, any>> {
    return axiosInstance.get<any>(
      this.apiUrl +
        "/getByLearningPathId/" +
        learningPathId +
        "?PageIndex=0&PageSize=100"
    );
  }
}

export default new AccountLearningPathService();
