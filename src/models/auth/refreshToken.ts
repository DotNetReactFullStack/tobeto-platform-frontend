import BaseModel from "../../core/models/baseModel";
import { UserModel } from "../users/userModel";

export default interface RefreshToken extends BaseModel<number> {
    userId: number;
    token: string;
    expires: string;
    createdByIp: string;
    revoked: string | null;
    revokedByIp: string | null;
    replacedByToken: string | null;
    reasonRevoked: string | null;
    user: UserModel;

}