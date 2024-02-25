import React, { useState } from "react";
import returnInputText from "../../../helper/returnInputText";
import LabelHeadingComponet from "../../CustumComponet/LabelHeadingComponet";
import ButtonGroup from "../../CustumComponet/ButtonGroup";
import UploadFile from "../../CustumComponet/UploadFile";
import { useEffect } from "react";



const BankDetails = ({ register, errors, form }) => {
  const {setValue}=form;
  const [selectedFile, setSelectedFile] = useState({});

  const handleFileInputChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
    }
  };

  const handleFileDelete = () => {
    setSelectedFile({});
  };
  
  
  const habdleViewImage = () => {
    if (selectedFile && selectedFile.type && selectedFile.type.startsWith('image')) {
      const blob = new Blob([selectedFile], { type: selectedFile.type });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    } else {
      console.error("Selected file is not an image.");
      // You may want to display an error message to the user if the selected file is not an image
    }
  };
  const buttons1 = [
    { id:'Cheque', color: 'success', icon: 'eye', fileUplodeBtn: false, onClick: habdleViewImage,selectedFile:selectedFile },
    { id:'Cheque',color: 'primary', icon: 'upload', fileUplodeBtn: true, onClick: handleFileInputChange,selectedFile:selectedFile },
    {id:'Cheque', color: 'danger', icon: 'trash', fileUplodeBtn: false, onClick: handleFileDelete ,selectedFile:selectedFile }
  ];
  
  useEffect(() => {
    // Update the selectedFileName value when selectedFile changes
    setValue('BankDetails.selectedFile.name', selectedFile.name ? selectedFile.name:"");
    setValue('BankDetails.selectedFile.size', selectedFile.size ? selectedFile.size:"");
  }, [selectedFile, setValue]);


  return (
    <>   
        {/* <LabelHeadingComponet lable={false} heading={"Bank Details"} /> */}
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
       <UploadFile heading={"Cheque Upload and Download"} fileName={selectedFile.name ? selectedFile.name:"File-Name"} fileSize={selectedFile.size ? selectedFile.size/1000 + "Kb" :'File-Size'} buttons={buttons1} positionSize={"start"} positionButtons={"flex-start"} register={register} errors={errors} form={form} />
      <hr className="border-bottom" />
    </>
  );
};

export default BankDetails;
