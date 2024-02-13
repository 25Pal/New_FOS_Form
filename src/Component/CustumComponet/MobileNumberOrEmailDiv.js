import React from "react";
import InputText from "./InputText";

const MobileNumberOrEmailDiv = ({ dataObject,register,errors}) => {
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
              dynamicKey={curElem.ID}
              register={register}
              errors={errors}
            />
          );
        })}
      </div>
    </>
  );
};

export default MobileNumberOrEmailDiv;
