import React from "react";

const SelectOption = ({
  options,
  idName,
  lableName,
  lg,
  register,
  dynamicKey,
}) => {
  return (
    <div className={`col-lg-${lg ? lg : 4} col-md-6 col-xs-12 select-option`}>
      <label htmlFor={idName}>{lableName}</label>
      <select
        {...register(`${dynamicKey ? dynamicKey + "." : ""}${idName}`)}
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
