import React from "react";
import InputText from "../../CustumComponet/InputText";
import returnInputText from "../../../helper/returnInputText";
import LabelHeadingComponet from "../../CustumComponet/LabelHeadingComponet";
import SelectOption from "../../CustumComponet/SelectOption";
import TextArea from "../../CustumComponet/TextArea";

const ownerTypeOption = [
  { name: "Private Company" },
  { name: "Public Company" },
  { name: "Partnership" },
  { name: "Sole Proprietor" },
  { name: "LLP" },
];

const typeOfBussinessOption = [
  { name: "Restaurant" },
  { name: "Fine Dining Restaurant" },
  { name: "Fast Food Restaurant (OSR)/Fast Casual Restaurant" },
  { name: "Food Truck/Cart/Stand" },
  { name: "Buffet Type Restaurant" },
  { name: "Ghost Restaurant/Dark Kitchen" },
  { name: "POP-UP Restaurant" },
  { name: "Fusion Restaurant" },
  { name: "Pub/Bar Restaurant" },
  { name: "Cafe/Bistro" },
  { name: "Club House" },
  { name: "Bakery" },
];

const CompanyDetails = ({ register, errors, form }) => {
  return (
    <>
      
        <div className="container">
          {/* <LabelHeadingComponet lable={false} heading={"Company Details"} /> */}
          <div className="row">
            {returnInputText(
              "Pan Number",
              "text",
              "panNumber",
              6,
              register,
              "ComapnyDetails",
              errors,
              form,
              true
            )}
            {returnInputText(
              "GSTN Number",
              "text",
              "gstNumber",
              6,
              register,
              "ComapnyDetails",
              errors,
              form,
              true
            )}
            {returnInputText(
              "FSAII Number",
              "text",
              "fsaiiNumber",
              6,
              register,
              "ComapnyDetails",
              errors,
              form,
              true
            )}
            {returnInputText(
              "FSAII Refernce",
              "text",
              "fsaiiRefernce",
              6,
              register,
              "ComapnyDetails",
              errors,
              form,
              false
            )}
          </div>
        {/* </div> */}
        <hr className="border-bottom" />
      
        {/* <div className="container"> */}
          <LabelHeadingComponet lable={false} heading={"Signing Authority"} />
          <div className="row">
            {returnInputText(
              "Name",
              "text",
              "s_a_name",
              6,
              register,
              "ComapnyDetails",
              errors,
              form,
              true
            )}
            {returnInputText(
              "Designation",
              "text",
              "s_a_designation",
              6,
              register,
              "ComapnyDetails",
              errors,
              form,
              true
            )}
            {returnInputText(
              "Mobile No",
              "number",
              "s_a_mobileNo",
              6,
              register,
              "ComapnyDetails",
              errors,
              form,
              true
            )}
            {returnInputText(
              "Email",
              "email",
              "s_a_email",
              6,
              register,
              "ComapnyDetails",
              errors,
              form,
              true
            )}
          </div>
        {/* </div> */}
        <hr className="border-bottom" />
      
        {/* <div className="container"> */}
          <div className="row g-4">
            <TextArea
              labelName="Registered Address"
              idName="Registered Address"
              dynamicKey="ComapnyDetails"
              register={register}
              errors={errors} 
              lg={12}
              required={true}
            />
            </div>
            <hr className="border-bottom" />
            <div className="row g-4">
            <SelectOption
              register={register}
              options={ownerTypeOption}
              idName="selectedOwnerType"
              lableName="Owner Type"
              lg={6}
              dynamicKey="ComapnyDetails"
              errors={errors}
              form={form}
              required={true}
            />
            <SelectOption
              register={register}
              options={typeOfBussinessOption}
              idName="selectedTypeOfBussiness"
              lableName="Type of Business"
              lg={6}
              dynamicKey="ComapnyDetails"
              errors={errors}
              form={form}
              required={true}
            />


            </div>
           
          
        </div>
        <hr className="border-bottom" />
    </>
  );
};

export default CompanyDetails;
