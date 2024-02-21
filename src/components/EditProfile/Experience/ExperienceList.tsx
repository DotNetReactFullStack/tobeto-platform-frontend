import React, { useEffect } from "react";
import "./ExperienceList.css";
import ExperienceElement from "./ExperienceElement";
import { useDispatch, useSelector } from "react-redux";
import { GetListByAccountIdExperienceListItemDto } from "../../../models/experiences/getListByAccountIdExperienceListItemDto";
import { RootState } from "../../../store/configureStore";
import { setAccountExperiences } from "../../../store/experience/experienceSlice";
import experienceService from "../../../services/experienceService";

type Props = {};

const ExperienceList = (props: Props) => {

  const dispatch = useDispatch();

  const accountId = useSelector((state: any) => state.account.currentAccount.payload.id);

  const accountExperiences: GetListByAccountIdExperienceListItemDto[] = useSelector((state: RootState) => state.experience.accountExperiences);

  const formatDateString = (date: string) => {
    const inputDate = new Date(date);
    const formattedDate = `${inputDate.getDate().toString().padStart(2, '0')}/${(inputDate.getMonth() + 1).toString().padStart(2, '0')}/${inputDate.getFullYear()}`;

    if (date === null) {
      return "Devam ediyor"
    }

    return formattedDate;
  }

  async function fetchData() {
    try {
      const accountExperiencesResponse = await experienceService.getListByAccountId(accountId);
      const data = accountExperiencesResponse.data.items;
      dispatch(setAccountExperiences(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  console.log(accountExperiences)

  return (
    <div className="experience-list">
      {accountExperiences.map((value: any, index: number) => (
        <ExperienceElement
          key={index}
          id={value.id}
          startingDate={formatDateString(value.startingDate)}
          endingDate={formatDateString(value.endingDate)}
          companyName={value.companyName}
          jobTitle={value.jobTitle}
          industry={value.industry}
          cityName={value.cityName}
          description={value.description}
        />
      ))}
    </div>
  );
};

export default ExperienceList;
