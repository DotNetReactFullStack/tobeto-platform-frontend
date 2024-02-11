import AccessToken from "./accessToken";
import { AuthenticatorType } from "./authenticatorType";


export interface LoggedHttpResponse {
    accessToken: AccessToken | null;
    requiredAuthenticatorType: AuthenticatorType | null;
}
