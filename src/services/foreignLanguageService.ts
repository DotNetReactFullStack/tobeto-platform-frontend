import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";

class ForeignLanguageService extends BaseService<
    any,
    any,
    any,
    any,
    any,
    any
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "ForeignLanguages?PageIndex=0&PageSize=1000";
    }

    getByFilter() { }
}

export default new ForeignLanguageService();


