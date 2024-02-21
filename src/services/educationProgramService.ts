import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../core/interceptors/axiosInterceptor";

class EducationProgramService extends BaseService<
  any,
  any,
  any,
  any,
  any,
  any
> {
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "Capabilities?PageIndex=0&PageSize=20000";
  }

  getByCollegeId(collegeId: number): Promise<AxiosResponse<any, any>> {
    return axiosInstance.get<any>(
      BASE_API_URL +
        "EducationPrograms/getByCollegeId/" +
        collegeId +
        "?PageIndex=0&PageSize=2000"
    );
  }
}

export default new EducationProgramService();
