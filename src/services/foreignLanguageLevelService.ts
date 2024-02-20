import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";

class ForeignLanguageLevelService extends BaseService<
    any,
    any,
    any,
    any,
    any,
    any
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "ForeignLanguageLevels?PageIndex=0&PageSize=1000";
    }

    getByFilter() { }
}

export default new ForeignLanguageLevelService();