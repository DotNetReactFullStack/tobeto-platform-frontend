import BaseModel from "../../core/models/baseModel";
import { UserOperationClaim } from "../userOperationClaims/userOperationClaimModel";

export interface OperationClaim extends BaseModel<number> {
    name: string;
    userOperationClaims: UserOperationClaim[];
}