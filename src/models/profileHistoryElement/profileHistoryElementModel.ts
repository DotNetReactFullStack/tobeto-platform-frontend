import { ProfileHistoryElementEducationModel } from "./profileHistoryElementEducationModel";
import { ProfileHistoryElementExperienceModel } from "./profileHistoryElementExperienceModel";

export interface ProfileHistoryElementModel {
    education?: ProfileHistoryElementEducationModel;
    experience?: ProfileHistoryElementExperienceModel;
}