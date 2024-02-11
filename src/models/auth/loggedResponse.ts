import AccessToken from "./accessToken";
import { AuthenticatorType } from "./authenticatorType";
import RefreshToken from "./refreshToken";

export interface LoggedResponse {
    accessToken: AccessToken | null;
    refreshToken: RefreshToken | null;
    requiredAuthenticatorType: AuthenticatorType | null;
}

