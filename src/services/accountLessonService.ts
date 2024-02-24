import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../core/interceptors/axiosInterceptor";
import { updateAccountLessonIsCompleteRequest } from "../models/accountLesson/updateAccountLessonIsCompleteRequest";
import { GetListByAccountIdAccountLessonListItemDto } from "../models/accountLesson/getListByAccountIdAccountLessonListItemDto";
import { GetByAccountIdAndLessonIdAccountLessonResponse } from "../models/accountLesson/getByAccountIdAndLessonIdAccountLessonResponse";

class AccountLessonService extends BaseService<any, any, any, any, any, any> {
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "AccountLessons";
  }

  // getByFilter() {}
  getListByAccountId(accountId: number): Promise<AxiosResponse<any, any>> {
    return axiosInstance.get<any>(
      this.apiUrl +
        "/getListByAccountId/" +
        accountId +
        "?PageIndex=0&PageSize=2000"
    );
  }

  getByAccountIdAndLessonId(
    accountId: number,
    lessonId: number
  ): Promise<
    AxiosResponse<GetByAccountIdAndLessonIdAccountLessonResponse, any>
  > {
    return axiosInstance.get<GetByAccountIdAndLessonIdAccountLessonResponse>(
      this.apiUrl + "/getAccountId/" + accountId + "/LessonId/" + lessonId
    );
  }

  updateIsComplete(
    request: updateAccountLessonIsCompleteRequest
  ): Promise<AxiosResponse<updateAccountLessonIsCompleteRequest, any>> {
    return axiosInstance.put<updateAccountLessonIsCompleteRequest>(
      this.apiUrl + "/IsComplete",
      request
    );
  }
}

export default new AccountLessonService();
