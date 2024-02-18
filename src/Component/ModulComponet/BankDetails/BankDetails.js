import React from "react";
import returnInputText from "../../../helper/returnInputText";
import LabelHeadingComponet from "../../CustumComponet/LabelHeadingComponet";
import ButtonGroup from "../../CustumComponet/ButtonGroup";
import UploadFile from "../../CustumComponet/UploadFile";

const buttons1 = [
    { color: 'success', icon: 'eye' },
    { color: 'primary', icon: 'upload' },
    { color: 'danger', icon: 'trash' }
  ];

const BankDetails = ({ register, errors, form }) => {
  return (
    <>   
        <LabelHeadingComponet lable={false} heading={"Bank Details"} />
          <div className="row">
            {returnInputText(
              "Beneficiary Name",
              "text",
              "bank_Beneficiary_Name",
              6,
              register,
              "BankDetails",
              errors,
              form
            )}
            {returnInputText(
              "Beneficiary Account No.",
              "Number",
              "bank_Account_Number",
              6,
              register,
              "BankDetails",
              errors,
              form
            )}
            {returnInputText(
              "Beneficiary Bank Name",
              "text",
              "bank_Name",
              6,
              register,
              "BankDetails",
              errors,
              form
            )}
            {returnInputText(
              "Beneficiary IFSC Code",
              "text",
              "bank_ifsc_code",
              6,
              register,
              "BankDetails",
              errors,
              form
            )}
          </div>
          <hr className="border-bottom" />
      <UploadFile heading={"Cheque Upload and Download"} fileName={"cheque.png"} fileSize={"25.05 KB"} buttons={buttons1} positionSize={"start"} positionButtons={"flex-start"} />
      <hr className="border-bottom" />
    </>
  );
};

export default BankDetails;
