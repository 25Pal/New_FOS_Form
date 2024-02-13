import React from "react";

const InputText = ({labelName, type, idName,lg,register,dynamicKey,errors,validation}) => {
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
                value: /^\d{10}$/,
                message: "Mobile Number must be 10 digits",
              }
            }),
            ...(labelName === 'Pan Number' && {
              validate:{
                invalid:value => validation(value),
                exceed: value => value.length <= 10 || 'Maximum 10 characters allowed' 
              } 
            })
          })}
          
        />
         
         <p className="error">{errors[dynamicKey || '']?.[idName]?.message}</p>
      </div>
    </>
  );
};

export default InputText;
