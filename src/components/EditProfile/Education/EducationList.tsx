import React, { useEffect } from "react";
import "./EducationList.css";
import EducationElement from "./EducationElement";
import { useDispatch, useSelector } from "react-redux";
import { GetListByAccountIdAccountCollegeMetadataListItemDto } from "../../../models/accountCollegeMetadatas/getListByAccountIdAccountCollegeMetadataListItemDto";
import { RootState } from "../../../store/configureStore";
import accountCollegeMetadataService from "../../../services/accountCollegeMetadataService";
import { setAccountCollegeMetadatas } from "../../../store/accountCollegeMetadata/accountCollegeMetadataSlice";

type Props = {};

const EducationList = (props: Props) => {

  const dispatch = useDispatch();

  const accountId = useSelector(
    (state: any) => state.account.currentAccount.payload.id
  );

  const accountCollegeMetadatas: GetListByAccountIdAccountCollegeMetadataListItemDto[] =
    useSelector(
      (state: RootState) => state.accountCollegeMetadata.accountCollegeMetadatas
    );

  const formatDateToYearAndMonthString = (date: string) => {
    const inputDate = new Date(date);
    const formattedDate = `${(inputDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${inputDate.getFullYear().toString()}`;

    if (date === null) {
      return "Devam ediyor";
    }

    return formattedDate;
  };

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

  const refreshData = useSelector((state: any) => state.accountCollegeMetadata.refreshData);

  useEffect(() => {
    fetchAccountCollegeMetadata();
  }, [refreshData]);

  return (
    <div className="education-list">
      {accountCollegeMetadatas.length > 0 &&
        accountCollegeMetadatas.map((value: any, index: number) => (
          <EducationElement
            key={index}
            id={value.id}
            graduationStatusName={value.graduationStatusName}
            collegeName={value.collegeName}
            educationProgramName={value.educationProgramName}
            startingYear={formatDateToYearAndMonthString(value.startingYear)}
            graduationYear={formatDateToYearAndMonthString(
              value.graduationYear
            )}
            programOnGoing={value.programOnGoing}
          />
        ))}
    </div>
  );
};

export default EducationList;
