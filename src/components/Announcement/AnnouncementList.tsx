import React, { useEffect } from "react";
import AnnouncementElement from "./AnnouncementElement";
import "./AnnouncementList.css";
import AnnouncementDetailModal from "./AnnouncementDetailModal";
import { useDispatch, useSelector } from "react-redux";
import { GetListByAccountIdAccountAnnouncementListItemDto } from "../../models/accountAnnouncement/getListByAccountIdAccountAnnouncementListItemDto";
import { RootState } from "../../store/configureStore";
import { setAccountAnnouncements } from "../../store/accountAnnouncement/accountAnnouncementSlice";
import accountAnnouncementService from "../../services/accountAnnouncementService";

type Props = {};

function AnnouncementList({ }: Props) {

  const dispatch = useDispatch();

  const accountId = useSelector((state: any) => state.account.currentAccount.payload.id);

  const accountAnnouncements: GetListByAccountIdAccountAnnouncementListItemDto[] = useSelector((state: RootState) => state.accountAnnouncement.accountAnnouncements);

  async function fetchAccountCapabilityData() {
    try {
      const accountCapabilitiesResponse = await accountAnnouncementService.getListByAccountId(accountId);
      const data = accountCapabilitiesResponse.data.items;
      dispatch(setAccountAnnouncements(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    fetchAccountCapabilityData();
    console.log(accountAnnouncements)
  }, [])

  return (
    <div className="container main-section announcement-list-container">
      {accountAnnouncements.map((value, index) => (
        <div className="announcement-list-announcement-element">
          <AnnouncementElement
            key={index}
            id={value.id.toString()}
            announcementTypeName={value.announcementTypeName}
            organizationName={value.organizationName}
            name={value.name}
            publishedDate={value.publishedDate}
          />

          <AnnouncementDetailModal
            key={index}
            id={value.id.toString()}
            name={value.name}
            content={value.content}
            organizationName={value.organizationName}
          />
        </div>
      ))}
    </div>
  );
}

export default AnnouncementList;
