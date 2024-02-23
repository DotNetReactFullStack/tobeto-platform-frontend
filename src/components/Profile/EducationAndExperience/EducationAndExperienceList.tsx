import React, { useEffect } from "react";
import "./EducationAndExperienceList.css";
import EducationLineElement from "./EducationLineElement";
import ExperienceLineElement from "./ExperienceLineElement";
import { ProfileHistoryElementType } from "../../../models/profileHistoryElement/profileHistoryElementType";
import { ProfileHistoryElementEducationModel } from "../../../models/profileHistoryElement/profileHistoryElementEducationModel";
import { GetListByAccountIdAccountCollegeMetadataListItemDto } from "../../../models/accountCollegeMetadatas/getListByAccountIdAccountCollegeMetadataListItemDto";
import { GetListByAccountIdExperienceListItemDto } from "../../../models/experiences/getListByAccountIdExperienceListItemDto";
import { ProfileHistoryElementExperienceModel } from "../../../models/profileHistoryElement/profileHistoryElementExperienceModel";
import { setAccountCollegeMetadatas } from "../../../store/accountCollegeMetadata/accountCollegeMetadataSlice";
import accountCollegeMetadataService from "../../../services/accountCollegeMetadataService";
import { setAccountExperiences } from "../../../store/experience/experienceSlice";
import experienceService from "../../../services/experienceService";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/configureStore";

type Props = {};

const EducationAndExperienceList = (props: Props) => {

  const dispatch = useDispatch();

  const accountId = useSelector((state: any) => state.account.currentAccount.payload.id);

  const accountExperiences: GetListByAccountIdExperienceListItemDto[] = useSelector((state: RootState) => state.experience.accountExperiences);

  const accountCollegeMetadatas: GetListByAccountIdAccountCollegeMetadataListItemDto[] =
    useSelector(
      (state: RootState) =>
        state.accountCollegeMetadata.accountCollegeMetadatas
    );

  async function fetchAccountExperienceData() {
    try {
      const accountExperiencesResponse = await experienceService.getListByAccountId(accountId);
      const data = accountExperiencesResponse.data.items;
      dispatch(setAccountExperiences(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  async function fetchAccountCollegeMetadata() {
    try {
      const accountCollegeMetadatasResponse =
        await accountCollegeMetadataService.getListByAccountId(accountId);
      const data = accountCollegeMetadatasResponse.data.items;
      dispatch(setAccountCollegeMetadatas(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  const mergeData = (accountExperiences: GetListByAccountIdExperienceListItemDto[], accountCollegeMetadatas: GetListByAccountIdAccountCollegeMetadataListItemDto[]) => {
    let historyExperienceData: ProfileHistoryElementExperienceModel[] = [];
    let historyEducationData: ProfileHistoryElementEducationModel[] = [];

    historyExperienceData = accountExperiences.map((experience) => { return { elementType: ProfileHistoryElementType.Experience, experienceData: experience } })

    historyEducationData = accountCollegeMetadatas.map((education) => { return { elementType: ProfileHistoryElementType.Education, educationData: education } })

    return [...historyExperienceData, ...historyEducationData];
  }

  const educationAndExperienceData = mergeData(accountExperiences, accountCollegeMetadatas);

  const allStartingDates: string[] = [];
  educationAndExperienceData.forEach((item: any) => {
    if (item.elementType === 'education') {
      allStartingDates.push(item.educationData.startingYear);
    } else {
      allStartingDates.push(item.experienceData.startingDate);
    }
  });

  // Başlangıç tarihlerine göre diziyi karmaşık bir şekilde sıralama
  educationAndExperienceData.sort((a: any, b: any) => { // refactor
    const dateA = a.elementType === 'education' ? a.educationData.startingYear : a.experienceData.startingDate;
    const dateB = b.elementType === 'education' ? b.educationData.startingYear : b.experienceData.startingDate;
    // Başlangıç tarihlerine göre sıralama
    if (dateA === dateB) {
      // Aynı başlangıç tarihine sahipler, elementType'e göre sıralama
      return a.elementType === 'education' ? -1 : 1;
    } else {
      // Başlangıç tarihlerine göre sıralama
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    }
  });

  useEffect(() => {
    fetchAccountExperienceData();
    fetchAccountCollegeMetadata();
  }, []);

  return (
    <div className="education-and-experience-list">
      <div className="education-and-experience-line">

        {educationAndExperienceData.map((values: any, index) => {
          if (values.elementType === ProfileHistoryElementType.Education) {
            return (
              <EducationLineElement
                key={index}
                startingYear={values.educationData.startingYear}
                graduationYear={values.educationData.graduationYear}
                collegeName={values.educationData.collegeName}
                educationProgramName={values.educationData.educationProgramName}
                graduationStatusName={values.educationData.graduationStatusName}
              />
            );
          } else if (values.elementType === ProfileHistoryElementType.Experience) {
            return (
              <ExperienceLineElement
                key={index}
                startingDate={values.experienceData.startingDate}
                endingDate={values.experienceData.endingDate}
                companyName={values.experienceData.companyName}
                jobTitle={values.experienceData.jobTitle}
              />
            );
          } else {
            return (<></>)
          }
        })}
      </div>
    </div>
  );
};

export default EducationAndExperienceList;