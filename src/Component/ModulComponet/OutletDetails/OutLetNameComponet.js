import React from "react";
import LabelHeadingComponet from '../../CustumComponet/LabelHeadingComponet'
import returnInputText from '../../../helper/returnInputText'

const OutLetNameComponet = ({ register, errors, form }) => {
  return (
    <>
      {/* <div> */}
        {/* <div className="container"> */}
          <LabelHeadingComponet lable={false} heading={"Outlet Name"} />
          <div className="row">
            {returnInputText(
              "Name",
              "text",
              "outletName",
              12,
              register,
              "OutletDetails",
              errors,
              form
            )}
          </div>
        {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default OutLetNameComponet;
