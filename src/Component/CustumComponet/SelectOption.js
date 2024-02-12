import React from "react";

const SelectOption = ({
  options,
  idName,
  lableName,
  lg,
  register
}) => {
  return (
    <div className={`col-lg-${lg ? lg : 4} col-md-6 col-xs-12 select-option`}>
      <label htmlFor={idName}>{lableName}</label>
      <select
        {...register(idName)}
        name={idName}
        id={idName}
        className="select-dropdown"
       
      >
        <option value="">{`Select ${lableName}`}</option>
        {options.map((curOption, index) => {
          return (
            <option key={index} value={curOption.name}>
              {curOption.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectOption;
