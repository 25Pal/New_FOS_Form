import React, { useState } from "react";
import generateDataObject from "../../helper/generateDataObject";
import MobileNumberOrEmailDiv from "./MobileNumberOrEmailDiv";
import LabelHeadingComponet from "./LabelHeadingComponet";

const MobileOrEmailComponet = ({mobile,register }) => {
  const numberKeys = [1,2,3];
  
  return (
    <>
      {numberKeys?.map((curElem, index) => {
        return (
          <div key={`${curElem}-${index}`} style={{ padding: "5px" }}>
            <LabelHeadingComponet lable={mobile} number={index + 1} />
            <div className="container">
            <MobileNumberOrEmailDiv
              key={`${curElem}-${index}`}
              dataObject={generateDataObject(index + 1,mobile)}
              register={register}
            />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MobileOrEmailComponet;
