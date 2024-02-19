import { CreateAccountForeignLanguageMetadataRequest } from './../models/accountForeignLanguageMetadatas/createAccountForeignLanguageMetadataRequest';
import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";



class AccountForeignLanguageMetadataService extends BaseService<
    any,
    any,
    CreateAccountForeignLanguageMetadataRequest,
    any,
    any,
    any
>{
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "AccountForeignLanguageMetadatas";
    }

    getByFilter() { }
}

export default new AccountForeignLanguageMetadataService();