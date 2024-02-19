import { GetListByAccountIdExperienceListItemDto } from "../experiences/getListByAccountIdExperienceListItemDto";
import { ProfileHistoryElementType } from "./profileHistoryElementType";

export interface ProfileHistoryElementExperienceModel {
    elementType: ProfileHistoryElementType;
    experienceData: GetListByAccountIdExperienceListItemDto;
}