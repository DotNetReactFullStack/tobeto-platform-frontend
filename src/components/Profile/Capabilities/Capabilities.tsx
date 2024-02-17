import React, { useEffect } from "react";
import "./Capabilities.css";
import CapabilitiesElement from "./CapabilitiesElement";
import { setAccountCapabilities } from "../../../store/accountCapability/accountCapabilitySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/configureStore";
import { GetListByAccountIdAccountCapabilityListItemDto } from "../../../models/accountCapability/getListByAccountIdAccountCapabilityListItemDto";
import accountCapabilityService from "../../../services/accountCapabilityService";

type Props = {};

const Capabilities = (props: Props) => {

  const dispatch = useDispatch();

  const accountId = useSelector((state: any) => state.account.currentAccount.payload.id);

  const accountCapabilities: GetListByAccountIdAccountCapabilityListItemDto[] = useSelector((state: RootState) => state.accountCapability.accountCapabilities);

  async function fetchData() {
    try {
      const accountCapabilitiesResponse = await accountCapabilityService.getListByAccountId(accountId);
      const data = accountCapabilitiesResponse.data.items;
      dispatch(setAccountCapabilities(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div className="capabilities">
        {accountCapabilities.slice(0, 6).map((accountCapability, index) => (
          <CapabilitiesElement key={index} content={accountCapability.capabilityName} />
        ))}
      </div>
      {
        (accountCapabilities.length > 6)
          ? <>
            <div className="text-center fs-2" style={{ marginBottom: '-24px', color: '#488ff6' }}><i className="bi bi-three-dots"></i></div>
          </>
          : <>
          </>
      }
    </>
  );
};

export default Capabilities;
