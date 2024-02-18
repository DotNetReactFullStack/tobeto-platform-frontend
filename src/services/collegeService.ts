import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";

class CollegeService extends BaseService<any, any, any, any, any, any> {
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "Colleges?PageIndex=0&PageSize=20000";
  }

  getByFilter() {}
}

export default new CollegeService();
