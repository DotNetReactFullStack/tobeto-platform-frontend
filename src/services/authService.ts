import { AxiosResponse } from "axios";
import axiosInstance from "../core/interceptors/axiosInterceptor";
import { LoggedResponse } from "../models/auth/loggedResponse";
import LoginRequest from "../models/auth/loginRequest";
import { RegisterRequest } from "../models/auth/registerRequest";

class AuthService {
  register(model: RegisterRequest) {
    return axiosInstance.post("Auth/register", model);
  }

  login(model: LoginRequest) {
    return axiosInstance.post("Auth/login", model);
  }
}

export default new AuthService();
