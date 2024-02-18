import React from 'react'
import TextArea from '../../CustumComponet/TextArea'
import returnInputText from '../../../helper/returnInputText'

const LocationComponet = ({register,errors,form}) => {
  return (
   <>
    {/* <div className='container' > */}
        <div className='row g-3'> 
                <TextArea labelName="Location" idName="location" dynamicKey="OutletDetails" register={register} lg={12} />  
                {returnInputText("Locality","text","locality",4,register,"OutletDetails",errors,form)}     
        </div>
    {/* </div> */}
   
   </>
  )
}

export default LocationComponet