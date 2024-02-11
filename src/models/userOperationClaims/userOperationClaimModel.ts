import BaseModel from "../../core/models/baseModel";
import { OperationClaim } from "../operationClaims/operationClaimModel";
import { UserModel } from "../users/userModel";

export interface UserOperationClaim extends BaseModel<number> {
    userId: number;
    operationClaimId: number;
    user: UserModel;
    operationClaim: OperationClaim;
}