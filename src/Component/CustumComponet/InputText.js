import React, { useState } from "react";

const InputText = ({labelName, type, idName,lg,register,dynamicKey,errors,validation,form}) => {
  const {setValue,setError,formState={errors}}=form;
  const [panNumber, setPanNumber] = useState("");


  const CheckMobileNumber=(value)=>{
    if(value.length > 10){
      const newValue = value.slice(0, 10);
     
       setValue(`${dynamicKey ? dynamicKey + "." : ""}${idName}`, newValue);
      //  setError(`${dynamicKey ? dynamicKey + "." : ""}${idName}`,{ type: "manual", message: "Maximum 10 Charcter Aloowed" })
      
    }
    return setError(`${dynamicKey ? dynamicKey + "." : ""}${idName}`,{ type: "manual", message: "" })
  }
  
  const handlePanNumberChange = (e) => {
    const value = e.target.value;
    // Limit the input length to 10 characters
    if (value.length <= 10) {
      setPanNumber(value);
    }
  };
  
  return (
    <>
      <div className={`col-lg-${lg ? lg:4} col-md-6 col-xs-12 input-wrapper`}>
        <label htmlFor={idName}>{labelName}</label>
        <input
          type={type}
          placeholder={labelName}
          name={idName}
          id={idName}
          onChange={labelName==='Pan Number' && handlePanNumberChange}
          {...register(`${dynamicKey ? dynamicKey + "." : ""}${idName}`,{
            required:{
              value:true,
              message:`${labelName} Is Required`,
            },
            ... (type === 'email' && {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalide Format Email",
              }
            }),
           ...(type === 'number' && {
            pattern: {
              value: /\d{10}/,
              message: "Mobile Number must be 10 digits",
            },
            validate: {
              isValid: (value) => CheckMobileNumber(value),
            }
            }),
            ...(labelName === 'Pan Number' && {
              pattern: {
                value: /^[A-Za-z0-9]{10}$/, // Validates for exactly 10 alphanumeric characters
                message: "PAN Number must be 10 alphanumeric characters",
              },
              maxLength: {
                value: 10,
                message: "PAN Number must not exceed 50 characters",
              },
              
             
            })
          })}
          
          
        />
         
         <p className="error">{errors[dynamicKey || '']?.[idName]?.message}</p>
      </div>
    </>
  );
};

export default InputText;
