import React from "react";
import InputText from "./InputText";

const MobileNumberOrEmailDiv = ({ dataObject, handleInputChange}) => {
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
        {dataObject?.map((curElem,index) => {
          return (
            <InputText
              key={curElem.id}
              labelName={curElem.labelName}
              idName={curElem.idName}
              type={curElem.type}
              value={curElem.value}
              handleChange={handleInputChange}
              register={curElem.register}
            />
          );
        })}
      </div>
    </>
  );
};

export default MobileNumberOrEmailDiv;
