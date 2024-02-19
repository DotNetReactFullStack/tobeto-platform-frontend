import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateAccountCollegeMetadataRequest } from "../models/accountCollegeMetadatas/createAccountCollegeMetadataRequest";

class AccountCollegeMetadataService extends BaseService<
  any,
  any,
  CreateAccountCollegeMetadataRequest,
  any,
  any,
  any
> {
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "AccountCollegeMetadatas";
  }

  getByFilter() {}
}

export default new AccountCollegeMetadataService();
