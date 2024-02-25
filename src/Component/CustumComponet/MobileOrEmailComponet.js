import React, { useState } from "react";
import generateDataObject from "../../helper/generateDataObject";
import MobileNumberOrEmailDiv from "./MobileNumberOrEmailDiv";
import LabelHeadingComponet from "./LabelHeadingComponet";

const MobileOrEmailComponet = ({mobile,register,errors,setValue,form }) => {
  const numberKeys = [{id:1,required:true},{id:2,required:false},{id:3,required:false}];
  
  return (
    <>
      {numberKeys?.map((curElem, index) => {
        return (
          <div  key={`${curElem.id}-${index}`}>
             {/* <div className="container"> */}
            <LabelHeadingComponet lable={mobile} number={index + 1} required={curElem.required}  />
            <MobileNumberOrEmailDiv
              key={`${curElem.id}-${index}`}
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
