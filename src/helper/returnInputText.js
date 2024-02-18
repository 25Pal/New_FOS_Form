import React from 'react'
import InputText from '../Component/CustumComponet/InputText'

const returnInputText = (labelName,type,idName,lg,register,dynamicKey,errors,form) => {
  
  return (
    <InputText
    labelName={labelName}
    type={type}
    idName={idName}
    lg={lg}
    dynamicKey={dynamicKey}
    register={register}
    errors={errors}
    form={form}
  />
  ) 
}

export default returnInputText