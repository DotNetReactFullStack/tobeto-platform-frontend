import React, { useEffect, useState } from "react";
import "./CapabilityForm.css";
import InputContainer from "../InputContainer";
import { FormElementType } from "../../../models/formElementType";
import * as yup from "yup";
import { Form, Formik } from "formik";
import capabilityService from "../../../services/capabilityService";
import { useDispatch, useSelector } from "react-redux";
import { GetListCapabilityListItemDto } from "../../../models/capability/getListCapabilityListItemDto";
import { setCapabilities } from "../../../store/capability/capabilitySlice";
import { RootState } from "../../../store/configureStore";
import {
  clearAccountCapabilityToAdd,
  setAccountCapabilityToAdd,
} from "../../../store/accountCapability/accountCapabilitySlice";
import { CreateAccountCapabilityRequest } from "../../../models/accountCapability/createAccountCapabilityRequest";
import accountCapabilityService from "../../../services/accountCapabilityService";

type Props = {};

const ifVisibilityIsTrue = (value: any) => value.visibility === true;
const ifVisibilityIsFalse = (value: any) => value.visibility === false;
let capabilitiesOptionDataFilters = [ifVisibilityIsTrue];
const sortByPriorityDesc = (a: any, b: any) => b.priority - a.priority;

//Formik, Yup
const initialValues: any = {
  capabilityId: "",
};

const validationSchema = yup.object({
  capabilityId: yup
    .string()
    .required("Yetkinlik alanı zorunludur")
    .notOneOf(["default"], "Yetkinlik alanı zorunludur"),
});

const CapabilityForm = (props: Props) => {
  const dispatch = useDispatch();

  const accountId = useSelector(
    (state: any) => state.account.currentAccount.payload.id
  );

  async function fetchData() {
    try {
      const capabilitiesResponse = await capabilityService.getAll();
      const data = capabilitiesResponse.data.items;
      console.log(data);
      dispatch(setCapabilities(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const capabilities: GetListCapabilityListItemDto[] = useSelector(
    (state: RootState) => state.capability.capabilities
  );

  //--------------accountCapabilityToAdd-----------------
  const accountCapabilityToAdd: CreateAccountCapabilityRequest | null =
    useSelector(
      (state: RootState) => state.accountCapability.accountCapabilityToAdd
    );

  const handleAddCapability = async (
    values: any,
    accountId: number,
    dispatch: any
  ) => {
    dispatch(
      setAccountCapabilityToAdd({
        accountId: accountId,
        capabilityId: Number(values.capabilityId),
        priority: 1,
      })
    );
  };

  useEffect(() => {
    if (accountCapabilityToAdd) {
      addAccountCapability(accountCapabilityToAdd)
        .then(() => {
          clearAccountCapabilityToAdd();
        })
        .catch((error) => {
          console.error("Hata oluştu:", error);
        });
    }
  }, [accountCapabilityToAdd]);

  const addAccountCapability = async (
    accountCapabilityToAdd: CreateAccountCapabilityRequest
  ) => {
    try {
      await accountCapabilityService.add(accountCapabilityToAdd);
      dispatch(clearAccountCapabilityToAdd());
    } catch (error) {
      console.error("Yetenek eklenirken bir hata oluştu:", error);
    }
  };

  return (
    <div className="capability-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values): any => {
          handleAddCapability(values, accountId, dispatch);
        }}
      >
        {(formikProps) => (
          <Form className="input-container-w-100">
            <div className="capability-input-container input-container-w-100">
              <InputContainer
                useFormikField={true}
                inputContainerClasses="capability-input-container input-container-w-100"
                elementType={FormElementType.Select}
                labelText="Yetkinlik"
                inputName="capabilityId"
                defaultOptionText="Yetkinlik Seçiniz"
                optionData={capabilities}
                optionDataFilters={capabilitiesOptionDataFilters}
                optionDataSort={sortByPriorityDesc}
                onChange={(e) => {
                  formikProps.handleChange(e);
                }}
              />
            </div>
            <button type="submit" className="capability-save-button">
              Kaydet
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CapabilityForm;
function dispatch(arg0: {
  payload: undefined;
  type: "accountCapability/clearNewCapability";
}) {
  throw new Error("Function not implemented.");
}
