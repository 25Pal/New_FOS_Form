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

const CompanyDetails = ({data,setData}) => {
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
          ...data,
          [name]: value
        });
      }
    
   
  return (
    <>
        <div style={{ padding: "5px" }}>
            <LabelHeadingComponet lable={false} heading={"Company Details"} />
      <div className="container">
        <div className="row">
           {returnInputText("Pan Number","text","panNumber",6,data?.panNumber,handleChange)} 
           {returnInputText("GSTN Number","text","gstNumber",6,data?.gstNumber,handleChange)}
           {returnInputText("FSAII Number","text","fsaiiNumber",6,data?.fsaiiNumber,handleChange)}
           {returnInputText("FSAII Refernce","text","fsaiiRefernce",6,data?.fsaiiRefernce,handleChange)}
          
        </div>
      </div>
        </div>
        <div style={{ padding: "5px" }}>
        <LabelHeadingComponet lable={false} heading={"Signing Authority"} />
         <div className="container">
            <div className="row">
              {returnInputText("Name","text","s_a_name",6,data?.s_a_name,handleChange)} 
              {returnInputText("Designation","text","s_a_designation",6,data?.s_a_designation,handleChange)}
              {returnInputText("Mobile No","number","s_a_mobileNo",6,data?.s_a_mobileNo,handleChange)}
              {returnInputText("Email","email","s_a_email",6,data?.s_a_email,handleChange)}
            </div>

         </div>
        </div>
        <div style={{ padding: "5px" }}>
         <div className="container">
            <div className="row">
            <SelectOption 
              selectValue={data?.selectedOwnerType} 
              handleChange={handleChange}  
              options={ownerTypeOption} 
              idName="selectedOwnerType" 
              lableName="Owner Type"
              lg={6}
              />
              <SelectOption 
              selectValue={data?.selectedTypeOfBussiness} 
              handleChange={handleChange}  
              options={typeOfBussinessOption} 
              idName="selectedTypeOfBussiness" 
              lableName="Type of Business"
              lg={6}
              />
            </div>

         </div>
        </div>
    </>
  );
};

export default CompanyDetails;
