import { AuthenticatorType } from "../auth/authenticatorType";
import { EmailAuthenticator } from "../auth/emailAuthenticator";
import { OtpAuthenticator } from "../auth/otpAuthenticator";
import RefreshToken from "../auth/refreshToken";
import BaseModel from "../../core/models/baseModel";
import { UserOperationClaim } from "../userOperationClaims/userOperationClaimModel";

export interface UserModel extends BaseModel<number> {
    firstName: string;
    lastName: string;
    email: string;
    passwordSalt: string;
    passwordHash: string;
    status: boolean;
    authenticatorType: AuthenticatorType;
    userOperationClaims: UserOperationClaim[];
    refreshTokens: RefreshToken[];
    emailAuthenticators: EmailAuthenticator[];
    otpAuthenticators: OtpAuthenticator[];
}