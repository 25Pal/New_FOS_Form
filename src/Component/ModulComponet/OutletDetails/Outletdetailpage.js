import React, { useState } from "react";
import MobileOrEmailComponet from "../../CustumComponet/MobileOrEmailComponet";
import CompanyDetails from "../CompanyDetails/CompanyDetails";
import { useForm } from "react-hook-form";
import BankDetails from "../BankDetails/BankDetails";

const OutletDetailPage = () => {
  const form = useForm({
    mode:"all"
  });
  const { register, handleSubmit ,formState,getValues,setValue} = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("form submitted :- 11", data);
  };

  const handleGetValues=()=>{
    console.log("getValues",getValues());
  }
  return (
    <>
   <div className="container">
  <div className="row d-flex justify-content-center">
    <div className="col-lg-8 col-md-10 col-sm-12">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="p-3" style={{border:'1px solid red'}}>
        <MobileOrEmailComponet mobile={true} register={register} errors={errors} setValue={setValue} form={form}/>
        <MobileOrEmailComponet register={register} errors={errors} form={form}/>
        <CompanyDetails register={register} errors={errors}  form={form}/>
        <BankDetails register={register} errors={errors}  form={form} />
        <button type="submit">Submit</button>
        <button onClick={handleGetValues}>getValues</button>
      </form>
    </div>
  </div>
</div>

    </>
  );
};

export default OutletDetailPage;
