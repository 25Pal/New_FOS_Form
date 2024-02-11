import React from "react";

const LabelHeadingComponet = ({ lable, number,heading }) => {
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
          {heading } 
        </div>
      ) : (
        <div
          style={{
            textAlign: "left",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          Outlet {findLable} #{number}
        </div>
      )}
    </>
  );
};

export default LabelHeadingComponet;
