import React from 'react'
import InputText from '../Component/CustumComponet/InputText'

const returnInputText = (labelName,type,idName,lg,register,dynamicKey,errors,form) => {
  const validation=(value)=>{
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
  if (!panRegex.test(value)) {
    return "Invalid PAN Number";
  }
  
  return true;
  }  
  return (
    <InputText
    labelName={labelName}
    type={type}
    idName={idName}
    lg={lg}
    dynamicKey={dynamicKey}
    register={register}
    errors={errors}
    validation={validation}
    form={form}
  />
  ) 
}

export default returnInputText