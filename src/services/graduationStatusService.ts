import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";

class GraduationStatusService extends BaseService<
  any,
  any,
  any,
  any,
  any,
  any
> {
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "GraduationStatus?PageIndex=0&PageSize=20";
  }

  getByFilter() {}
}

export default new GraduationStatusService();
