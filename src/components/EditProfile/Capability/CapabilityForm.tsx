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
import { setCapabilityToAccount } from "../../../store/accountCapability/accountCapabilitySlice";

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

const handleAddCapability = async (
  values: any,
  accountId: number,
  dispatch: any
) => {
  dispatch(
    setCapabilityToAccount({
      accountId: accountId,
      capabilityId: Number(values.capabilityId),
      priority: 1,
    })
  );
};

const CapabilityForm = (props: Props) => {
  const [selectedCapabilityId, setSelectedCapabilityId] = useState<
    number | null
  >(null);

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
                  setSelectedCapabilityId(parseInt(e.target.value));
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
