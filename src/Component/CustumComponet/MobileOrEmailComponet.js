import React, { useState } from "react";
import generateDataObject from "../../helper/generateDataObject";
import MobileNumberOrEmailDiv from "./MobileNumberOrEmailDiv";
import LabelHeadingComponet from "./LabelHeadingComponet";

const MobileOrEmailComponet = ({ data, setData, mobile,register }) => {
  const numberKeys = Object.keys(data);

  const handleInputChange = (e, number) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [number]: {
        ...data[number],
        [name]: value,
      },
    });
  };

  return (
    <>
      {numberKeys?.map((curElem, index) => {
        return (
          <div key={`${curElem}-${index}`} style={{ padding: "5px" }}>
            <LabelHeadingComponet lable={mobile} number={index + 1} />
            <div className="container">
            <MobileNumberOrEmailDiv
              key={`${curElem}-${index}`}
              dataObject={generateDataObject(index + 1, data, mobile)}
              handleInputChange={(e) => handleInputChange(e, curElem)}
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
