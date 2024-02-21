import { CreateAccountForeignLanguageMetadataRequest } from './../models/accountForeignLanguageMetadatas/createAccountForeignLanguageMetadataRequest';
import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from '../core/interceptors/axiosInterceptor';



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

    //getByFilter() { }

    getListByAccountId(accountId: number): Promise<AxiosResponse<any, any>> {
        return axiosInstance.get<any>(
            this.apiUrl + "/getByAccountId/" + accountId + "?PageIndex=0&PageSize=100"
        );
    }

}

export default new AccountForeignLanguageMetadataService();