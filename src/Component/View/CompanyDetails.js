import React from "react";
import InputText from "../CustumComponet/InputText";
import returnInputText from "../../helper/returnInputText";
import LabelHeadingComponet from "../CustumComponet/LabelHeadingComponet";
import SelectOption from "../CustumComponet/SelectOption";

const ownerTypeOption = [
    { name: "Private Company" },
    { name: "Public Company" },
    { name: "Partnership" },
    { name: "Sole Proprietor" },
    { name: "LLP" },
  ];

const typeOfBussinessOption=[
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
]  

const CompanyDetails = ({register,errors}) => {
  return (
    <>
        <div style={{ padding: "5px" }}>
            <LabelHeadingComponet lable={false} heading={"Company Details"} />
      <div className="container">
        <div className="row">
           {returnInputText("Pan Number","text","panNumber",6,register,"ComapnyDetails",errors)} 
           {returnInputText("GSTN Number","text","gstNumber",6,register,"ComapnyDetails",errors)}
           {returnInputText("FSAII Number","text","fsaiiNumber",6,register,"ComapnyDetails",errors)}
           {returnInputText("FSAII Refernce","text","fsaiiRefernce",6,register,"ComapnyDetails",errors)}
          
        </div>
      </div>
        </div>
        <div style={{ padding: "5px" }}>
        <LabelHeadingComponet lable={false} heading={"Signing Authority"} />
         <div className="container">
            <div className="row">
              {returnInputText("Name","text","s_a_name",6,register,"ComapnyDetails",errors)} 
              {returnInputText("Designation","text","s_a_designation",6,register,"ComapnyDetails",errors)}
              {returnInputText("Mobile No","number","s_a_mobileNo",6,register,"ComapnyDetails",errors)}
              {returnInputText("Email","email","s_a_email",6,register,"ComapnyDetails",errors)}
            </div>

         </div>
        </div>
        <div style={{ padding: "5px" }}>
         <div className="container">
            <div className="row">
            <SelectOption 
              register={register} 
              options={ownerTypeOption} 
              idName="selectedOwnerType" 
              lableName="Owner Type"
              lg={6}
              dynamicKey="ComapnyDetails"
              errors={errors}
              />
              <SelectOption 
              register={register}
              options={typeOfBussinessOption} 
              idName="selectedTypeOfBussiness" 
              lableName="Type of Business"
              lg={6}
              dynamicKey="ComapnyDetails"
              errors={errors}
              />
            </div>

         </div>
        </div>
    </>
  );
};

export default CompanyDetails;
