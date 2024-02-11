import React from "react";

const SelectOption = ({
  selectValue,
  handleChange,
  options,
  idName,
  lableName,
  lg,
}) => {
  return (
    <div className={`col-lg-${lg ? lg : 4} col-md-6 col-xs-12 select-option`}>
      <label htmlFor={idName}>{lableName}</label>
      <select
        value={selectValue}
        onChange={handleChange}
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
