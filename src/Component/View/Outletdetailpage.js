import React, { useState } from "react";
import MobileOrEmailComponet from "../CustumComponet/MobileOrEmailComponet";
import CompanyDetails from "./CompanyDetails";
import { useForm } from "react-hook-form";

const OutletDetailPage = () => {
  const form = useForm();
  const { register, handleSubmit ,formState} = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("form submitted :- 11", data);
  };
  const ownerTypeOption = [
    { name: "Private Company" },
    { name: "Public Company" },
    { name: "Partnership" },
    { name: "Sole Proprietor" },
    { name: "LLP" },
  ];
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ border: "1px solid red" }}>
          <MobileOrEmailComponet mobile={true} register={register} errors={errors}/>
          <MobileOrEmailComponet register={register} errors={errors} />
          <CompanyDetails register={register} errors={errors} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default OutletDetailPage;
