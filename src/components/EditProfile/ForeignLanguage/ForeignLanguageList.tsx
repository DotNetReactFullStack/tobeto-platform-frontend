import React, { useEffect } from "react";
import "./ForeignLanguageList.css";
import ForeignLanguagesElement from "./ForeignLanguageElement";
import { GetListByAccountIdAccountForeignLanguageMetaDataListItemDto } from "../../../models/accountForeignLanguageMetadatas/getListByAccountIdAccountForeignLanguageMetaDataListItemDto";
import { RootState } from "../../../store/configureStore";
import { useDispatch, useSelector } from "react-redux";
import accountForeignLanguageMetadataService from "../../../services/accountForeignLanguageMetadataService";
import { setAccountForeignLanguageMetadatas } from "../../../store/accountForeignLanguageMetadata/accountForeignLanguageMetadataSlice";

type Props = {};

const ForeignLanguageList = (props: Props) => {

  const dispatch = useDispatch();
  const accountId = useSelector(
    (state: any) => state.account.currentAccount.payload.id
  );
  const accountForeignLanguageMetadatas: GetListByAccountIdAccountForeignLanguageMetaDataListItemDto[] =
    useSelector(
      (state: RootState) => state.accountForeignLanguageMetadata.accountForeignLanguageMetadatas
    );

  async function fetchAccountForeignLanguageMetadata() {
    try {
      const accountForeignLanguageMetadatasResponse =
        await accountForeignLanguageMetadataService.getListByAccountId(accountId);
      const data = accountForeignLanguageMetadatasResponse.data.items;
      dispatch(setAccountForeignLanguageMetadatas(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    fetchAccountForeignLanguageMetadata();
  }, []);




  return (
    <div className="foreing-language-list">
      {accountForeignLanguageMetadatas.map((value, index) => (
        <ForeignLanguagesElement
          key={index}
          id={value.id}
          foreignLanguageName={value.foreignLanguageName}
          foreignLanguageLevelName={value.foreignLanguageLevelName}
        />
      ))}
    </div>
  );
};

export default ForeignLanguageList;
