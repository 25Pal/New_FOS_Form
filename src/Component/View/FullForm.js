import React, { useState } from "react";
import CompanyDetails from "../ModulComponet/CompanyDetails/CompanyDetails";
import { useForm } from "react-hook-form";
import BankDetails from "../ModulComponet/BankDetails/BankDetails";
import Outletdetails from "../ModulComponet/OutletDetails/Outletdetails";
import CommisionDetails from "../ModulComponet/CommisionDetails/CommisionDetails";
import OtherDetails from "../ModulComponet/OtherDetails/OtherDetails";
import ParentComponent from "../CustumComponet/ParentComponent";
import TimesDetails from "../ModulComponet/TimesDetails/TimesDetails";

const FullForm = () => {
  const form = useForm({
    mode:"all"
  });
  const { register, handleSubmit ,formState} = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("form submitted :- 11", data);
  };
 
  const childs=[
    {mainHeading:"Outlet Details" ,childComponent:<Outletdetails register={register} errors={errors} form={form} />},
    {mainHeading:"Company Details" ,childComponent:<CompanyDetails register={register} errors={errors} form={form} />},
    {mainHeading:"Time Details",childComponent:<TimesDetails register={register} errors={errors} form={form} />},
    {mainHeading:"Bank Details" ,childComponent:<BankDetails register={register} errors={errors} form={form} />},
    {mainHeading:"Commission Details" ,childComponent:<CommisionDetails register={register} errors={errors} form={form} />},
    {mainHeading:"Other Details",childComponent:<OtherDetails register={register} errors={errors} form={form} />},
  ]

  return (
    <>
  <div className="container-fluid">
  <div className="row d-flex justify-content-center">
    <div className="col-lg-8 col-md-10 col-sm-12" style={{backgroundColor: 'rgb(220, 233, 231)' ,padding: '0px', margin: '0px'}}>
      <img src="./images/Banner.png" alt="Banner" style={{ width: '100%', marginBottom: '10px'}} />
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="p-3">
        {
          childs.map((child,index)=>{
            return (
              <ParentComponent key={index} mainHeading={child.mainHeading} childComponent={child.childComponent} />
            )
          })
        }
        <button className="mx-auto d-block btn btn-outline-info text text-black" style={{ fontWeight: 'bold' }} type="submit">Submit</button>
      </form>
    </div>
  </div>
</div>


    </>
  );
};

export default FullForm;
