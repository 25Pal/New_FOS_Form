import React from 'react'
import './Otherdetail.css'

function Otherdetailpage( {values,handleBlur,handleChange, touched, errors}) {
  return (
    <div className='mainOutlet'>

    <div  className='heading4'>
        <h5>Other Details</h5>
    </div>

    <div id='otherDeatilPage'>

        <div className='childContainer'>

        <label>
            FOS ID<span className="mandatory">*</span>
        </label>

        <div id='fosid'>
            <input id='fosInputField' name='fos_id' value={values.fos_id} onChange={handleChange} placeholder='Select FOSID' />
            { errors.fos_id && touched.fos_id ?   <p  className='form-error'  > {errors.fos_id}  </p> : null  }
        
        </div>

        </div>
        
        <div  className='childContainer'>
        <label>
            Remark
        </label>
        <div id='fosid'>
            <input id='remarkInputField' name='remarks' value={values.remarks} onChange={handleChange}  placeholder='Enter Remark'/>
        </div>
        </div>

       

    </div>
</div>
  )
}

export default Otherdetailpage