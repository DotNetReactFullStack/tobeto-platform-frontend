
import { GetListByAccountIdAccountCollegeMetadataListItemDto } from "../accountCollegeMetadatas/getListByAccountIdAccountCollegeMetadataListItemDto";
import { ProfileHistoryElementType } from "./profileHistoryElementType";

export interface ProfileHistoryElementEducationModel {
    elementType: ProfileHistoryElementType;
    educationData: GetListByAccountIdAccountCollegeMetadataListItemDto;
}