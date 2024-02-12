import React from 'react'
import InputText from '../Component/CustumComponet/InputText'

const returnInputText = (labelName,type,idName,lg,register,dynamicKey) => {
 
  return (
    <InputText
    labelName={labelName}
    type={type}
    idName={idName}
    lg={lg}
    dynamicKey={dynamicKey}
    register={register}
  />
  ) 
}

export default returnInputText