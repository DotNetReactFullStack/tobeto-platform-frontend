import React, { useEffect } from "react";
import "./SocialMediaAccountList.css";
import SocialMediaAccountElement from "./SocialMediaAccountElement";
import { useDispatch, useSelector } from "react-redux";
import { GetListByAccountIdAccountSocialMediaPlatformListItemDto } from "../../../models/accountSocialMediaPlatforms/getListByAccountIdAccountSocialMediaPlatformListItemDto";
import { RootState } from "../../../store/configureStore";
import accountSocialMediaPlatformService from "../../../services/accountSocialMediaPlatformService";
import { setAccountSocialMediaPlatforms } from "../../../store/accountSocialMediaPlatform/accountSocialMediaPlatformSlice";

type Props = {};

const SocialMediaAccountList = (props: Props) => {
  const dispatch = useDispatch();
  const accountId = useSelector(
    (state: any) => state.account.currentAccount.payload.id
  );
  const accountSocialMediaPlatforms: GetListByAccountIdAccountSocialMediaPlatformListItemDto[] =
    useSelector(
      (state: RootState) =>
        state.accountSocialMediaPlatform.accountSocialMediaPlatforms
    );

  async function fetchAccountSocialMediaPlatform() {
    try {
      const accountSocialMediaPlatformsResponse =
        await accountSocialMediaPlatformService.getListByAccountId(accountId);
      const data = accountSocialMediaPlatformsResponse.data.items;
      dispatch(setAccountSocialMediaPlatforms(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  const refreshData = useSelector((state: any) => state.accountSocialMediaPlatform.refreshData);

  useEffect(() => {
    fetchAccountSocialMediaPlatform();
  }, [refreshData]);

  return (
    <div className="social-media-account-list">
      {accountSocialMediaPlatforms.map((value, index) => (
        <>
          {(() => {
            switch (value.socialMediaPlatformId) {
              case 1:
                return (
                  <SocialMediaAccountElement
                    id={value.id}
                    socialMediaPlatformName={value.socialMediaPlatformName}
                    iconPath={value.iconPath}
                    link={value.link}
                    iconColor="#181717"
                  />
                );
              case 2:
                return (
                  <SocialMediaAccountElement
                    id={value.id}
                    socialMediaPlatformName={value.socialMediaPlatformName}
                    iconPath={value.iconPath}
                    link={value.link}
                    iconColor="#0077b5"
                  />
                );
              case 3:
                return (
                  <SocialMediaAccountElement
                    id={value.id}
                    socialMediaPlatformName={value.socialMediaPlatformName}
                    iconPath={value.iconPath}
                    link={value.link}
                    iconColor="#e03780"
                  />
                );

              case 4:
                return (
                  <SocialMediaAccountElement
                    id={value.id}
                    socialMediaPlatformName={value.socialMediaPlatformName}
                    iconPath={value.iconPath}
                    link={value.link}
                    iconColor="#181717"
                  />
                );
            }
          })()}
        </>
      ))}
    </div>
  );
};

export default SocialMediaAccountList;
