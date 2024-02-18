import React, { useState } from "react";
import generateDataObject from "../../helper/generateDataObject";
import MobileNumberOrEmailDiv from "./MobileNumberOrEmailDiv";
import LabelHeadingComponet from "./LabelHeadingComponet";

const MobileOrEmailComponet = ({mobile,register,errors,setValue,form }) => {
  const numberKeys = [1,2,3];
  
  return (
    <>
      {numberKeys?.map((curElem, index) => {
        return (
          <div  key={`${curElem}-${index}`}>
             {/* <div className="container"> */}
            <LabelHeadingComponet lable={mobile} number={index + 1} />
            <MobileNumberOrEmailDiv
              key={`${curElem}-${index}`}
              dataObject={generateDataObject(index + 1,mobile)}
              register={register}
              errors={errors}
              setValue={setValue}
              form={form}
            />
             {/* </div> */}
           </div>
        );
      })}
    </>
  );
};

export default MobileOrEmailComponet;
