import React, { useState } from "react";

const InputText = ({labelName, type, idName,lg,register,dynamicKey,errors,form}) => {
  const {setValue,setError,formState={errors}}=form;
  
  const CheckMobileNumber=(value)=>{
    if(value.length > 10){
      const newValue = value.slice(0, 10);
     
       setValue(`${dynamicKey ? dynamicKey + "." : ""}${idName}`, newValue);
      //  setError(`${dynamicKey ? dynamicKey + "." : ""}${idName}`,{ type: "manual", message: "Maximum 10 Charcter Aloowed" })
      
    }
    return setError(`${dynamicKey ? dynamicKey + "." : ""}${idName}`,{ type: "manual", message: "" })
  }
  
  return (
    <>
      <div className={`col-lg-${lg ? lg:4} col-md-6 col-xs-12 input-wrapper`}>
        <label htmlFor={idName}>{labelName}</label>
        <input
          type={type}
          placeholder={labelName}
          name={idName}
          id={idName}
          {...register(`${dynamicKey ? dynamicKey + "." : ""}${idName}`,{
            // required:{
            //   value:true,
            //   message:`${labelName} Is Required`,
            // },
            // ... (type === 'email' && {
            //   pattern: {
            //     value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            //     message: "Invalide Format Email",
            //   }
            // }),
          //  ...(type === 'number' && {
          //   pattern: {
          //     value: /\d{10}/,
          //     message: "Mobile Number must be 10 digits",
          //   },
            // validate: {
            //   isValid: (value) => CheckMobileNumber(value),
            // }
            // }),
            // ...(labelName === 'Pan Number' && {
              // validate: (value) => {
              //   // Limit the input length to 10 characters
              //   const newValue = value.replace(/[^A-Za-z0-9]/g, '').substring(0, 10);
              //   setValue(`${dynamicKey ? dynamicKey + "." : ""}${idName}`, newValue);
              //   setError(`${dynamicKey ? dynamicKey + "." : ""}${idName}`, { type: "manual", message: "Invalid PAN Number format" });
            
              //   // Check if the PAN number matches the correct format
              //   const panPattern = /^[A-Za-z]{5}[0-9]{4}[A-Za-z]$/;
              //   if (!panPattern.test(newValue)) {
              //     setError(`${dynamicKey ? dynamicKey + "." : ""}${idName}`, { type: "manual", message: "Invalid PAN Number format" });
              //     return false;
              //   }
              //   return true;
            //   // },
            //   pattern: {
            //     value: /^[A-Z]{5}[0-9]{4}[A-Z]$/,
            //     message: "PAN Number must be in the format AZCPN3435R"
            //   }
            // })
          })}
          
          
        />
         
         <p className="error">{errors[dynamicKey || '']?.[idName]?.message}</p>
      </div>
    </>
  );
};

export default InputText;
