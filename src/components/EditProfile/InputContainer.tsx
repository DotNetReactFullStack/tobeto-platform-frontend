import React, { useState } from 'react'

type Props = {
    inputContainerClasses?: string;
    labelClasses?: string;
    labelText?: string;
    elementType?: string;
    inputName?: string;
    inputClasses?: string;
    inputType?: string;
    inputPlaceholder?: string;
    defaultOptionValue?: string;
    defaultOptionText?: string;
    optionData?: any[];
    optionDataFilters?: any;
    optionDataSort?: any;
    children?: React.ReactNode;
}

const InputContainer = ({ inputContainerClasses, labelClasses, labelText, elementType, inputName, inputClasses, inputType, inputPlaceholder, defaultOptionValue, defaultOptionText, optionData, optionDataFilters, optionDataSort, children }: Props) => {

    return (
        <div className={inputContainerClasses}>
            <label className={labelClasses}>{labelText || '\u00A0'}</label>
            {
                <>
                    {(() => {
                        console.log(elementType);
                        switch (elementType) {
                            case "input":
                                return (
                                    <>
                                        <input
                                            className={inputClasses}
                                            name={inputName}
                                            type={inputType || "text"}
                                            placeholder={inputPlaceholder} />
                                        {children}
                                    </>
                                )
                            case "textarea":
                                return (
                                    <>
                                        <textarea
                                            className={inputClasses}
                                            name={inputName}
                                            placeholder={inputPlaceholder}
                                        ></textarea>
                                        {children}
                                    </>
                                )
                            case "select":
                                return (
                                    <>
                                        <select name={inputName}>
                                            <option value={defaultOptionValue}>{defaultOptionText}</option>
                                            {
                                                optionData?.filter(
                                                    optionDataFilters
                                                        ?
                                                        (filter) => optionDataFilters.every((filterFunction: (arg0: any) => any) => filterFunction(filter))
                                                        :
                                                        (element) => { return element })
                                                    .sort(optionDataSort)
                                                    .map((optionValue, index) => (
                                                        <option key={index} value={optionValue.id}>{optionValue.name}</option>
                                                    ))
                                            }
                                        </select>
                                        {children}
                                    </>
                                )
                        }
                    })()}
                </>
            }
        </div >
    )
}

InputContainer.defaultProps = {
    elementType: 'input',
    defaultOptionValue: 'default',
    optionDataFilters: [(value: any) => { return value }],
    optionDataSort: (value: any) => { return value },
};

export default InputContainer