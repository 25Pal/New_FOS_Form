import React from 'react'
import InputText from '../Component/CustumComponet/InputText'

const returnInputText = (labelName,type,idName,lg,value,handleChange) => {
 
  return (
    <InputText
    labelName={labelName}
    type={type}
    idName={idName}
    lg={lg}
    value={value}
    handleChange={handleChange}
  />
  ) 
}

export default returnInputText