import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../core/interceptors/axiosInterceptor";
import { UpdateAccountLearningPathIsSavedRequest } from "../models/accountLearningPaths/UpdateAccountLearningPathIsSavedRequest";
import { UpdateAccountLearningPathIsLikedRequest } from "../models/accountLearningPaths/UpdateAccountLearningPathIsLikedRequest";
import { updateAccountLearningPathPercentCompleteRequest } from "../models/accountLearningPaths/updateAccountLearningPathPercentCompleteRequest";

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

  getListByAccountIdAndLearningPathId(
    accountId: number,
    learningPathId: number
  ): Promise<AxiosResponse<any, any>> {
    return axiosInstance.get<any>(
      this.apiUrl +
        "/getByAccountId/" +
        accountId +
        "/LearningPathId/" +
        learningPathId
    );
  }

  getListByLearningPathId(
    learningPathId: number
  ): Promise<AxiosResponse<any, any>> {
    return axiosInstance.get<any>(
      this.apiUrl +
        "/getByLearningPathId/" +
        learningPathId +
        "?PageIndex=0&PageSize=10000"
    );
  }

  updateIsLiked(
    request: UpdateAccountLearningPathIsLikedRequest
  ): Promise<AxiosResponse<UpdateAccountLearningPathIsLikedRequest, any>> {
    return axiosInstance.put<UpdateAccountLearningPathIsLikedRequest>(
      this.apiUrl + "/IsLiked",
      request
    );
  }
  updateIsSaved(
    request: UpdateAccountLearningPathIsSavedRequest
  ): Promise<AxiosResponse<UpdateAccountLearningPathIsSavedRequest, any>> {
    return axiosInstance.put<UpdateAccountLearningPathIsSavedRequest>(
      this.apiUrl + "/IsSaved",
      request
    );
  }
  updatePercentComplete(
    request: updateAccountLearningPathPercentCompleteRequest
  ): Promise<
    AxiosResponse<updateAccountLearningPathPercentCompleteRequest, any>
  > {
    return axiosInstance.put<updateAccountLearningPathPercentCompleteRequest>(
      this.apiUrl + "/PercentComplete",
      request
    );
  }
}

export default new AccountLearningPathService();
