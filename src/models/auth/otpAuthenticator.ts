import BaseModel from "../../core/models/baseModel";
import { UserModel } from "../users/userModel";

export interface OtpAuthenticator extends BaseModel<number> {
    userId: number;
    secretKey: string;
    isVerified: boolean;
    user: UserModel;
}