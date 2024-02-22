import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../core/interceptors/axiosInterceptor";

class AccountLessonService extends BaseService<any, any, any, any, any, any> {
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "AccountLessons";
  }

  // getByFilter() {}
  getListByAccountIdAndLessonId(
    accountId: number,
    lessonId: number
  ): Promise<AxiosResponse<any, any>> {
    return axiosInstance.get<any>(
      this.apiUrl + "/getAccountId/" + accountId + "/LessonId/" + lessonId
    );
  }
}

export default new AccountLessonService();
