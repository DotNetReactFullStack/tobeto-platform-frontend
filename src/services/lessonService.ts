import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../core/interceptors/axiosInterceptor";
import { UpdateLessonDurationRequest } from "../models/lesson/updateLessonDurationRequest";

class LessonService extends BaseService<any, any, any, any, any, any> {
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "Lessons";
  }

  updateLessonDuration(request: any): Promise<AxiosResponse<any, any>> {
    return axiosInstance.put<any>(
      this.apiUrl + "/updateLessonDuration",
      request
    );
  }

  // getByFilter() {}
  getListByCourseId(courseId: number): Promise<AxiosResponse<any, any>> {
    return axiosInstance.get<any>(
      this.apiUrl + "/getByCourseId/" + courseId + "?PageIndex=0&PageSize=1000"
    );
  }
}

export default new LessonService();
