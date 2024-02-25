import React from "react";

const LabelHeadingComponet = ({ lable, number,heading ,mainHeading,required}) => {
  const findLable = lable === true ? "Mobile No. " : "Email";
  return (
    <>
      {lable === false ? (
        <div
          style={{
            textAlign: "left",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          {heading } {required ? <span style={{color:'red'}}>*</span>:''}
        </div>
      ) : mainHeading ? (
         <>
        <div
          className="main-heading"
        >
          {mainHeading }{required ? <span style={{color:'red'}}>*</span>:''}
        </div>

         </>

      ): (
        <div
          style={{
            textAlign: "left",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          Outlet {findLable} #{number} {required ? <span style={{color:'red'}}>*</span>:''}
        </div>
      )}
    </>
  );
};

export default LabelHeadingComponet;
