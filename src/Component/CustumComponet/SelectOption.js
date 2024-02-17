import React from "react";

const SelectOption = ({
  options,
  idName,
  lableName,
  lg,
  register,
  dynamicKey,
  errors,
  form
}) => {

  return (
    <div className={`col-lg-${lg ? lg : 4} col-md-6 col-xs-12 select-option`}>
      <label htmlFor={idName}>{lableName}</label>
      <p className="error">{errors[dynamicKey || '']?.[idName]?.message}</p>
      <select
        {...register(`${dynamicKey ? dynamicKey + "." : ""}${idName}`,{
          required:{
            value:true,
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
    </div>
  );
};

export default SelectOption;
