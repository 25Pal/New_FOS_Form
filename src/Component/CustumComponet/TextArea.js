import React from "react";

const TextArea = ({labelName,idName,dynamicKey,errors,register,lg,required}) => {
  
  return (
    <>
      <div className={`col-lg-${lg ? lg:4} col-md-6 col-xs-12 input-wrapper`}>
        <label htmlFor={idName}>{labelName} {required ? <span style={{color:'red'}}>*</span>:''}</label>
        <textarea
          id={idName}
          name={idName}
          autoComplete="off"
          placeholder={labelName}
          {...register(
            `${dynamicKey ? dynamicKey + "." : ""}${idName}`
          ,{
            required:{
              value:required ? true :false,
              message:`${labelName} Is Required`,
            }
          })}
        />
          <p className="error">{errors[dynamicKey || '']?.[idName]?.message}</p>
      </div>
    </>
  );
};

export default TextArea;
