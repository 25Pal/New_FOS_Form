import React, { useState } from "react";
import MobileOrEmailComponet from "../CustumComponet/MobileOrEmailComponet";
import CompanyDetails from "./CompanyDetails";
import { useForm } from "react-hook-form";


const OutletDetailPage = () => {

  const form =useForm();
  const {register,handleSubmit,formState}=form;

  const onSubmit=(data)=>{
    console.log("form submitted :- 11", data);
  }

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

  const handlSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", mobileData, emailData);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <MobileOrEmailComponet data={mobileData} setData={setMobileData} mobile={true} register={register}/>
          <MobileOrEmailComponet data={emailData} setData={setEmailData} register={register}/>
          <CompanyDetails register={register}/>   
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default OutletDetailPage;
