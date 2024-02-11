import React, { useState } from "react";
import MobileOrEmailComponet from "../CustumComponet/MobileOrEmailComponet";
import InputText from "../CustumComponet/InputText";
import CompanyDetails from "./CompanyDetails";
import SelectOption from "../CustumComponet/SelectOption";

const OutletDetailPage = () => {
  const [mobileData, setMobileData] = useState({
    mobileNumber1: {
      name: "",
      designation: "",
      mobileNo: "",
    },
    mobileNumber2: {
      name: "",
      designation: "",
      mobileNo: "",
    },
    mobileNumber3: {
      name: "",
      designation: "",
      mobileNo: "",
    },
  });

  const [emailData, setEmailData] = useState({
    email1: {
      name: "",
      designation: "",
      email: "",
    },
    email2: {
      name: "",
      designation: "",
      email: "",
    },
    email3: {
      name: "",
      designation: "",
      email: "",
    },
  });

  const [companyData,setCompanyData] =useState({
    panNumber:'',
    gstNumber:'',
    fsaiiNumber:'',
    fsaiiRefernce:'',
    s_a_name:'',
    s_a_mobileNo:'',
    s_a_email:'',
    s_a_designation:'',
    selectedOwnerType:'',
    selectedTypeOfBussiness:''

  }) 
  
  const handlSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", mobileData, emailData,companyData);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handlSubmit} style={{ border: "1px solid red" }}>
          <MobileOrEmailComponet data={mobileData} setData={setMobileData} mobile={true}/>
          <MobileOrEmailComponet data={emailData} setData={setEmailData} />
          <CompanyDetails  data={companyData} setData={setCompanyData}/>   
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default OutletDetailPage;
