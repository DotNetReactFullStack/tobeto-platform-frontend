import BaseModel from "../../core/models/baseModel";
import { UserOperationClaim } from "../userOperationClaims/userOperationClaimModel";
import { UserModel } from "../users/userModel";

export interface AccountModel extends BaseModel<number> {
    userId: number;
    nationalIdentificationNumber: string;
    aboutMe: string;
    birthDate: string;
    phoneNumber: string;
    profilePhotoPath: string | null;
    profileLinkUrl: string;
    shareProfile: boolean;
    isActive: boolean;
    user: UserModel;
    userOperationClaims: UserOperationClaim[];
    // address: Address | null;
    // accountCapabilities: AccountCapability[];
    // accountCertificates: AccountCertificate[];
    // accountSocialMediaPlatforms: AccountSocialMediaPlatform[];
    // accountCollageMetadatas: AccountCollageMetadata[];
    // accountForeignLanguageMetadatas: AccountForeignLanguageMetadata[];
    // accountRecourses: AccountRecourse[];
    // accountExamResults: AccountExamResult[];
    // accountLearningPaths: AccountLearningPath[];
    // accountLessons: AccountLesson[];
    // accountClassrooms: AccountClassroom[];
    // accountCourses: AccountCourse[];
    // accountAnnouncements: AccountAnnouncement[];
    // experiences: Experience[];
}