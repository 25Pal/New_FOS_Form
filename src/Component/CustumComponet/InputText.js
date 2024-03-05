import React, { useState } from "react";
import getInputValidation from "../../helper/getInputValidation";

const InputText = ({
  labelName,
  type,
  idName,
  lg,
  register,
  dynamicKey,
  errors,
  form,
  required,
}) => {

  const { setValue, setError, formState = { errors } } = form;

  const CheckMobileNumber = (value) => {
    if (value.length > 10) {
      const newValue = value.slice(0, 10);
      setValue(`${dynamicKey ? dynamicKey + "." : ""}${idName}`, newValue);
    }
    return setError(`${dynamicKey ? dynamicKey + "." : ""}${idName}`, {
      type: "manual",
      message: "",
    });
  };

  return (
    <>
      <div className={`col-lg-${lg ? lg : 4} col-md-6 col-xs-12 input-wrapper`}>
        <label htmlFor={idName}>
          {labelName} {required ? <span style={{ color: "red" }}>*</span> : ""}
        </label>
        <input
          type={type}
          placeholder={labelName}
          name={idName}
          id={idName}
          {...register(`${dynamicKey ? dynamicKey + "." : ""}${idName}`, {
            required: {
              value: required ? false : false,
              message: `${labelName} Is Required`,
            },
            ...(type === "email" && {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalide Format Email",
              },
            }),
            ...(type === "number" &&
              labelName !== "Commission" && {
                pattern: {
                  value: /\d{10}/,
                  message: "Mobile Number must be 10 digits",
                },
                validate: {
                  isValid: (value) => CheckMobileNumber(value),
                },
              }),
            ...(type === "text" && {
              pattern: getInputValidation(labelName),
            }),
          })}
        />

        <p className="error">{errors[dynamicKey || ""]?.[idName]?.message}</p>
      </div>
    </>
  );
};

export default InputText;
