import React from "react";

const SelectOption = ({
  options,
  idName,
  lableName,
  lg,
  register,
  dynamicKey,
  errors,
  form,
  required
}) => {

  return (
    <div className={`col-lg-${lg ? lg : 4} col-md-6 col-xs-12 select-option`}>
      <label htmlFor={idName}>{lableName}</label>
      <select
        {...register(`${dynamicKey ? dynamicKey + "." : ""}${idName}`,{
          required:{
            value: required ? true : false,
            message:`${lableName} Is Required`,
          }
        })}
        className="select-dropdown"
        id={idName}
      >
        <option value="">{`Select ${lableName}`}</option>
        {options.map((curOption, index) => {
          return (
            <option key={curOption.name} value={curOption.name}>
              {curOption.name}
            </option>
          );
        })}
      </select>
      <p className="error">{errors[dynamicKey || '']?.[idName]?.message}</p>
    </div>
  );
};

export default SelectOption;
