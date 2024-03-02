import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../core/interceptors/axiosInterceptor";

class CourseLearningPathService extends BaseService<
  any,
  any,
  any,
  any,
  any,
  any
> {
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "CourseLearningPaths";
  }

  getListAll(): Promise<AxiosResponse<any, any>> {
    return axiosInstance.get<any>(this.apiUrl + "?PageIndex=0&PageSize=10000");
  }

  getListByLearningPathId(
    learningPathId: number
  ): Promise<AxiosResponse<any, any>> {
    return axiosInstance.get<any>(
      this.apiUrl +
        "/getByLearningPathId/" +
        learningPathId +
        "?PageIndex=0&PageSize=1000"
    );
  }
}

export default new CourseLearningPathService();
