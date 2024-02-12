import React from 'react'
import InputText from '../Component/CustumComponet/InputText'

const returnInputText = (labelName,type,idName,lg,register) => {
 
  return (
    <InputText
    labelName={labelName}
    type={type}
    idName={idName}
    lg={lg}
    register={register}
  />
  ) 
}

export default returnInputText