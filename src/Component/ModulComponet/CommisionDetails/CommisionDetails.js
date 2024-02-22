import React from 'react'
import returnInputText from '../../../helper/returnInputText'
import LabelHeadingComponet from '../../CustumComponet/LabelHeadingComponet'

const CommisionDetails = ({register, errors, form}) => {
  return (
    <>
        <div className='row'> 
        {returnInputText(
              "Commission",
              "number",
              "Commission",
              6,
              register,
              "OutletDetails",
              errors,
              form,
              true
            )}
        </div> 
    </>
  )
}

export default CommisionDetails