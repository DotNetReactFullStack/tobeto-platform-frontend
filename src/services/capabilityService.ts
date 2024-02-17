import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";

class CapabilityService extends BaseService
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
        this.apiUrl = BASE_API_URL + "Capabilities?PageIndex=0&PageSize=20000";
    }

    getByFilter() { }
}

export default new CapabilityService();