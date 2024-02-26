import React, { useEffect } from "react";
import "./Announcement.css";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import AnnouncementElement from "./AnnouncementElement";
import AnnouncementDetailModal from "./AnnouncementDetailModal";
import { setAccountAnnouncements } from "../../store/accountAnnouncement/accountAnnouncementSlice";
import { GetListByAccountIdAccountAnnouncementListItemDto } from "../../models/accountAnnouncement/getListByAccountIdAccountAnnouncementListItemDto";
import accountAnnouncementService from "../../services/accountAnnouncementService";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";

type Props = {};

const Announcement = (props: Props) => {

  const dispatch = useDispatch();

  const accountId = useSelector((state: any) => state.account.currentAccount.payload.id);

  const accountAnnouncements: GetListByAccountIdAccountAnnouncementListItemDto[] = useSelector((state: RootState) => state.accountAnnouncement.accountAnnouncements);

  async function fetchAccountCapabilityData() {
    try {
      const accountCapabilitiesResponse = await accountAnnouncementService.getListByAccountId(accountId);
      const data = accountCapabilitiesResponse.data.items;

      // refactor
      for (let index = 0; index < data.length; index++) {
        const originalDate = new Date(data[index]["publishedDate"]);
        data[index]["publishedDate"] = `${originalDate.getDate().toString().padStart(2, '0')}-${(originalDate.getMonth() + 1).toString().padStart(2, '0')}-${originalDate.getFullYear().toString().padStart(4, '0')}`;
      }

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
    <>
      <div className="announcement-component">
        {
          (accountAnnouncements.length > 0)
            ? accountAnnouncements.slice(0, 3).map((value, index) => (
              <div key={index}>
                <AnnouncementElement
                  id={value.id}
                  announcementTypeName={value.announcementTypeName}
                  organizationName={value.organizationName}
                  name={value.name}
                  publishedDate={value.publishedDate}
                />
                <AnnouncementDetailModal
                  id={value.id}
                  name={value.name}
                  content={value.content}
                  organizationName={value.organizationName}
                />
              </div>
            ))
            : <></>
        }
      </div>
      {accountAnnouncements.length > 3 ? (
        <ShowMoreButton redirectUrl="/announcements" />
      ) : (
        <></>
      )}
    </>
  );
};

export default Announcement;
