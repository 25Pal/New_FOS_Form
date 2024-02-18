import React from "react";

const TextArea = ({labelName,idName,dynamicKey,register,lg}) => {
  return (
    <>
      <div className={`col-lg-${lg ? lg:4} col-md-6 col-xs-12 input-wrapper`}>
        <label htmlFor={idName}>{labelName}</label>
        <textarea
          id={idName}
          name={idName}
          autoComplete="off"
          placeholder={labelName}
          {...register(
            `${dynamicKey ? dynamicKey + "." : ""}${idName}`
          )}
        />
      </div>
    </>
  );
};

export default TextArea;
