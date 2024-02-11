import BaseModel from "../../core/models/baseModel";
import { UserModel } from "../users/userModel";

export interface EmailAuthenticator extends BaseModel<number> {
    userId: number;
    activationKey: string | null;
    isVerified: boolean;
    user: UserModel;
}