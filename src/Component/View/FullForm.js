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
    
    const convertToTimeObject = (details) => {
      const timeObjects = [];
  
      Object.keys(details).forEach(day => {
          const item = details[day];
          const timeObject = {
              day: day,
              time: [item.Slots[0].slot],
              slots: item.Slots.filter((obj, idx) => idx !== 0)
          };
          timeObjects.push(timeObject);
      });
  
      return timeObjects;
   };
   
   const TimeObjects = convertToTimeObject(data?.TimeDetails);
   console.log(TimeObjects);

     const data1={

      //========== Outlet Details =========\\
      "brand_name": data?.OutletDetails.outletName,

      //#M1
      "bname": data?.mobileNumber1.m_name1,
      "role": data?.mobileNumber1.m_designation1,
      "bmob": data?.mobileNumber1.mobileNo1,
      "outletemail": data?.email1.email1,
      "bemail":data?.email1.email1,

      //#M2

      "oname": data?.mobileNumber2.m_name2,
      "role1": data?.mobileNumber2.m_designation2,
      "omob": data?.mobileNumber2.mobileNo2,
      "oemail": data?.email2.email2,


      //#M 3 - Missing 
      "name3": data?.mobileNumber3.m_name3,
      "role2": data?.mobileNumber3.m_designation3,
      "email3": data?.email3.email3,
      "omob3": data?.mobileNumber3.mobileNo3,

      //Location
      "Outlet_address_street": data?.OutletDetails.location,

      //Locality
      "Outlet_address_locality": data?.OutletDetails.locality,

      //Timing Pending 
      "timeData":TimeObjects || [],
      //Menu Upload Pending(New UI)

      "menuImage":data?.OutletDetails?.selectedFile,
      "menuFileName":data?.OutletDetails?.selectedFile?.name,
      "menuFileSize":data?.OutletDetails?.selectedFile?.size,


      //========= Company Details ===========\\
      //pan
      "pan": data?.ComapnyDetails?.panNumber,
      //GSTIN
      "gstin": data?.ComapnyDetails?.gstNumber,
      //FASSAI Licencse 
      "fssai": data?.ComapnyDetails?.fsaiiNumber,
      //FASSAI Ref Num
      "fssairef": data?.ComapnyDetails?.fsaiiRefernce,

      //Signing Name
      "registered_name": data?.ComapnyDetails?.s_a_name,
      
      //Mobile Number
      "o_mnumber": data?.ComapnyDetails?.s_a_name,

      //Signing  Mail
      "s_a_email": data?.ComapnyDetails?.s_a_email,

      //Register Billing Address
      "Billing_address_street": data?.ComapnyDetails?.RegisteredAddress,

      //Ownership Type
      "ownership": data?.ComapnyDetails?.selectedOwnerType,

      //Type of Business
      "type_of_business": data?.ComapnyDetails?.selectedTypeOfBussiness,

      //=======  Bank Details ==========\\

      //Benificiary Name 
      "bankname": data?.BankDetails?.bank_Beneficiary_Name,
      //Benificiary Acc Num
      "bankaccountnum": data?.BankDetails?.bank_Account_Number,
      //IFSC code 
      "ifsc": data?.BankDetails?.bank_ifsc_code,
      //Bank Name  
      "userBankName": data?.BankDetails?.bank_Name,


      //Check Upload and Download Missing 

      "userChequeImage":"",
      "userChequeImageName":data?.BankDetails?.selectedFile?.name,
      "userChequeImageSize":data?.BankDetails?.selectedFile?.size,



      //Commision Details
      "comm": data?.OutletDetails?.Commission,

      //Other Deatils 

      "fos_id": data?.OtherDetails?.otherDetails,
      "remarks": data?.OtherDetails?.remark,

      "Outlet_address_pincode": "",
      "Billing_address_pincode": "",
      "Billing_address_locality": "",

      "loc": "",
      "loc_lat": 19.1663,
      "loc_lon": 72.8526,
      "w_o_time": "",
      "w_c_time": "",
      "wk_o_time": "",
      "wk_c_time": "",
      "menu_url": "",
    }
    console.log("form submitted :-", data1);

  };
  

  const childs=[
    {mainHeading:"Outlet Details" ,childComponent:<Outletdetails register={register} errors={errors} form={form} />},
    {mainHeading:"Company Details" ,childComponent:<CompanyDetails register={register} errors={errors} form={form} />},
    {mainHeading:"Bank Details" ,childComponent:<BankDetails register={register} errors={errors} form={form} />},
    {mainHeading:"Commission Details" ,childComponent:<CommisionDetails register={register} errors={errors} form={form} />},
    {mainHeading:"Other Details",childComponent:<OtherDetails register={register} errors={errors} form={form} />},
    {mainHeading:"Time Details",childComponent:<TimesDetails register={register} errors={errors} form={form} />},
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
