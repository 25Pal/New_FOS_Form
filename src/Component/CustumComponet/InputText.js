import React from "react";

const InputText = ({labelName, type, idName, handleChange, value,lg}) => {
  return (
    <>
      <div className={`col-lg-${lg ? lg:4} col-md-6 col-xs-12 input-wrapper`}>
        <label htmlFor={idName}>{labelName}</label>
        <input
          type={type}
          placeholder={labelName}
          name={idName}
          id={idName}
          value={value}
          onChange={handleChange}
          // required
        />
      </div>
    </>
  );
};

export default InputText;
