import { AxiosResponse } from 'axios';
import { LoggedResponse } from "../../models/auth/loggedResponse";

class TokenService {
    getToken(): string | null {
        return localStorage.getItem("token");
    }

    hasToken(): boolean {
        return localStorage.getItem("token") != null;
    }

    async setToken(loggedResponse: Promise<AxiosResponse<LoggedResponse>>) {
        const token = (await loggedResponse).data.accessToken?.token;

        return (token !== undefined)
            ? localStorage.setItem("token", token)
            : {};
    }

    removeToken() {
        return localStorage.removeItem("token");
    }
}

export default new TokenService();