import React from "react";
import InputText from "./InputText";

const MobileNumberOrEmailDiv = ({ dataObject, handleInputChange,register}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }} 
        className="row"
      >
        {dataObject?.map((curElem) => {
          return (
            <InputText
              key={curElem.idName}
              labelName={curElem.labelName}
              idName={curElem.idName}
              type={curElem.type}
              value={curElem.value}
              handleChange={handleInputChange}
              dynamicKey={curElem.ID}
              register={register}
            />
          );
        })}
      </div>
    </>
  );
};

export default MobileNumberOrEmailDiv;
