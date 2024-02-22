import React, { useEffect } from 'react'
import './SocialMediaAccounts.css'
import SocialMediaAccountElement from './SocialMediaAccountElement';
import { useDispatch, useSelector } from 'react-redux';
import { GetListByAccountIdAccountSocialMediaPlatformListItemDto } from '../../../models/accountSocialMediaPlatforms/getListByAccountIdAccountSocialMediaPlatformListItemDto';
import { RootState } from '../../../store/configureStore';
import accountSocialMediaPlatformService from '../../../services/accountSocialMediaPlatformService';
import { setAccountSocialMediaPlatforms } from '../../../store/accountSocialMediaPlatform/accountSocialMediaPlatformSlice';

type Props = {}

const SocialMediaAccounts = (props: Props) => {

    const dispatch = useDispatch();

    const accountId = useSelector((state: any) => state.account.currentAccount.payload.id);

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
            for (let index = 0; index < data.length; index++) {
                switch (data[index].socialMediaPlatformId) {
                    case 1:
                        data[index]["iconColor"] = "#000000";
                        break;
                    case 2:
                        data[index]["iconColor"] = "#0077b5";
                        break;
                    case 3:
                        data[index]["iconColor"] = "#e03780";
                        break;
                    case 4:
                        data[index]["iconColor"] = "#181717";
                        break;
                }
            }
            dispatch(setAccountSocialMediaPlatforms(data));
        } catch (error) {
            console.error("Veri alınamadı:", error);
        }
    }

    useEffect(() => {
        fetchAccountSocialMediaPlatform();
    }, []);

    return (
        <div className='social-media-accounts'>
            {
                accountSocialMediaPlatforms.length === 0
                    ? <span className="color-gray-fs-15">Lütfen sosyal medya hesaplarınızı ekleyiniz.</span>
                    : <></>
            }
            {
                accountSocialMediaPlatforms.map((account: any, index) => (
                    <SocialMediaAccountElement key={index} iconClass={account.iconPath} iconColor={account.iconColor} link={account.link} />
                ))
            }
        </div>
    )
}

export default SocialMediaAccounts