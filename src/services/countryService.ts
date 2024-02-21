import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";

class CountryService extends BaseService
    <
        any,
        any,
        any,
        any,
        any,
        any
    > {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "Countries?PageIndex=0&PageSize=1907";
    }

    getByFilter() { }
}

export default new CountryService();