import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import { FormElementType } from "../../models/formElementType";
import { InputType } from "../../models/inputType";

type Props = {
  useFormikField?: boolean;
  inputContainerClasses?: string;
  labelClasses?: string;
  labelText?: string;
  elementType?: FormElementType;
  inputName?: string;
  inputClasses?: string;
  inputType?: InputType;
  inputPlaceholder?: string;
  inputValue?: string;
  defaultOptionValue?: string;
  defaultOptionText?: string;
  disabled?: boolean;
  optionData?: any[];
  optionDataFilters?: any;
  optionDataSort?: any;
  children?: React.ReactNode;
};

const InputContainer = ({
  useFormikField,
  inputContainerClasses,
  labelClasses,
  labelText,
  elementType,
  inputName,
  inputClasses,
  inputType,
  inputPlaceholder,
  inputValue,
  defaultOptionValue,
  defaultOptionText,
  disabled,
  optionData,
  optionDataFilters,
  optionDataSort,
  children,
}: Props) => {
  return (
    <div className={inputContainerClasses}>
      <label className={labelClasses}>{labelText || "\u00A0"}</label>
      {
        <>
          {(() => {
            return (
              <>
                {useFormikField ? (
                  elementType === "select" ? (
                    <Field
                      as={elementType}
                      className={inputClasses}
                      name={inputName}
                      value={inputValue}
                      disabled={disabled}
                    >
                      <option value={defaultOptionValue}>
                        {inputValue !== undefined
                          ? inputValue
                          : defaultOptionText}
                      </option>
                      {optionData
                        ?.filter(
                          optionDataFilters
                            ? (filter) =>
                                optionDataFilters.every(
                                  (filterFunction: (arg0: any) => any) =>
                                    filterFunction(filter)
                                )
                            : (element) => {
                                return element;
                              }
                        )
                        .sort(optionDataSort)
                        .map((optionValue, index) => (
                          <option key={index} value={optionValue.id}>
                            {optionValue.name}
                          </option>
                        ))}
                    </Field>
                  ) : (
                    <Field
                      as={elementType}
                      className={inputClasses}
                      name={inputName}
                      {...(elementType === "input" ? { type: inputType } : {})}
                      placeholder={inputPlaceholder}
                      value={inputValue}
                      disabled={disabled}
                      inputType={inputType}
                      labelText={labelText}
                    />
                  )
                ) : (
                  <>
                    {(() => {
                      switch (elementType) {
                        case FormElementType.Input:
                          return (
                            <input
                              className={inputClasses}
                              name={inputName}
                              type={inputType}
                              placeholder={inputPlaceholder}
                              value={inputValue}
                              disabled={disabled}
                            />
                          );
                        case FormElementType.Select:
                          return (
                            <select name={inputName}>
                              <option value={defaultOptionValue}>
                                {inputValue !== undefined
                                  ? inputValue
                                  : defaultOptionText}
                              </option>
                              {optionData
                                ?.filter(
                                  optionDataFilters
                                    ? (filter) =>
                                        optionDataFilters.every(
                                          (
                                            filterFunction: (arg0: any) => any
                                          ) => filterFunction(filter)
                                        )
                                    : (element) => {
                                        return element;
                                      }
                                )
                                .sort(optionDataSort)
                                .map((optionValue, index) => (
                                  <option key={index} value={optionValue.id}>
                                    {optionValue.name}
                                  </option>
                                ))}
                            </select>
                          );
                        case FormElementType.TextArea:
                          return (
                            <textarea
                              className={inputClasses}
                              name={inputName}
                              placeholder={inputPlaceholder}
                              value={inputValue}
                              disabled={disabled}
                            ></textarea>
                          );
                      }
                    })()}
                  </>
                )}
              </>
            );
          })()}
        </>
      }

      {children}

      {useFormikField === true && inputName !== undefined ? (
        <ErrorMessage
          name={inputName}
          className="validation-error-message-horizontal-alignment-start"
        >
          {(message) => <span className="text-danger">{message}</span>}
        </ErrorMessage>
      ) : (
        <></>
      )}
    </div>
  );
};

InputContainer.defaultProps = {
  useFormikField: false,
  elementType: FormElementType.Input,
  inputType: InputType.Text,
  defaultOptionValue: "default",
  optionDataFilters: [
    (value: any) => {
      return value;
    },
  ],
  optionDataSort: (value: any) => {
    return value;
  },
};

export default InputContainer;
