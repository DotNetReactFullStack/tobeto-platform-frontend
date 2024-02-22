import React, { useEffect } from "react";
import "./ForeignLanguages.css";
import ForeignLanguagesElement from "./ForeignLanguagesElement";
import accountForeignLanguageMetadataService from "../../../services/accountForeignLanguageMetadataService";
import { setAccountForeignLanguageMetadatas } from "../../../store/accountForeignLanguageMetadata/accountForeignLanguageMetadataSlice";
import { useDispatch, useSelector } from "react-redux";
import { GetListByAccountIdAccountForeignLanguageMetaDataListItemDto } from "../../../models/accountForeignLanguageMetadatas/getListByAccountIdAccountForeignLanguageMetaDataListItemDto";
import { RootState } from "../../../store/configureStore";

type Props = {};

const ForeignLanguages = (props: Props) => {

  const dispatch = useDispatch();

  const accountId = useSelector((state: any) => state.account.currentAccount.payload.id);

  // refactor
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

  const accountForeignLanguageMetadata: GetListByAccountIdAccountForeignLanguageMetaDataListItemDto[] =
    useSelector(
      (state: RootState) => state.accountForeignLanguageMetadata.accountForeignLanguageMetadatas
    );

  useEffect(() => {
    fetchAccountForeignLanguageMetadata();
  }, []);

  return (
    <div className="foreign-languages">
      {accountForeignLanguageMetadata.map((foreignLanguage, index) => (
        <ForeignLanguagesElement
          key={index}
          languageName={foreignLanguage.foreignLanguageName}
          languageLevel={foreignLanguage.foreignLanguageLevelName}
        />
      ))}
    </div>
  );
};

export default ForeignLanguages;
