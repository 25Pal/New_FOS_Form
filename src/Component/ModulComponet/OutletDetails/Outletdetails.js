import React, { useState } from 'react'
import MobileOrEmailComponet from '../../CustumComponet/MobileOrEmailComponet'

import LabelHeadingComponet from '../../CustumComponet/LabelHeadingComponet'
import ButtonGroup from '../../CustumComponet/ButtonGroup'
import UploadFile from '../../CustumComponet/UploadFile'
import OutLetNameComponet from './OutLetNameComponet'
import LocationComponet from './LocationComponet'
const buttons1 = [
    { color: 'success', icon: 'eye' ,fileUplodeBtn:false },
    { color: 'primary', icon: 'upload',fileUplodeBtn:true },
    { color: 'danger', icon: 'trash',fileUplodeBtn:false }
  ];
const Outletdetails = ({register,errors,form}) => {
  
  const [fileSelected, setFileSelected] = useState(false);

  const handleFileInputChange = (event) => {
    // Check if a file has been selected
    if (event.target.files.length > 0) {
      setFileSelected(true);
    } else {
      setFileSelected(false);
    }
  };

  return (
   <>
    <OutLetNameComponet register={register} errors={errors} form={form}/>
    <MobileOrEmailComponet mobile={true} register={register} errors={errors} form={form}/>
    <hr className="border-bottom" />
    <LocationComponet register={register} errors={errors} form={form} />
    <hr className="border-bottom" />
    <MobileOrEmailComponet register={register} errors={errors} form={form}/>
    <hr className="border-bottom" />
    <UploadFile heading={"Outlet Menu Uploaded File"} fileName={"Menu 1 for xyz company.docx"} fileSize={"25.05 KB"} buttons={buttons1} positionSize={"center"} positionButtons={"end"}  register={register} errors={errors} form={form} />
    <hr className="border-bottom" />
   </>
  )
}

export default Outletdetails