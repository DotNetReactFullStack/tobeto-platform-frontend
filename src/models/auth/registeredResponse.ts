import AccessToken from "./accessToken";
import RefreshToken from "./refreshToken";

export interface RegisteredResponse {
    accessToken: AccessToken;
    refreshToken: RefreshToken;
}