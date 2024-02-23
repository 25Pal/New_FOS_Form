import React, { useState } from 'react'
import MobileOrEmailComponet from '../../CustumComponet/MobileOrEmailComponet'

import LabelHeadingComponet from '../../CustumComponet/LabelHeadingComponet'
import ButtonGroup from '../../CustumComponet/ButtonGroup'
import UploadFile from '../../CustumComponet/UploadFile'
import OutLetNameComponet from './OutLetNameComponet'
import LocationComponet from './LocationComponet'

const Outletdetails = ({register,errors,form}) => {
  
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      console.log("selected file",selectedFile);
    }
  };
  
  
  const buttons1 = [
    { color: 'success', icon: 'eye', fileUplodeBtn: false, onClick: ()=> console.log("Hi") },
    { color: 'primary', icon: 'upload', fileUplodeBtn: true, onClick: handleFileInputChange },
    { color: 'danger', icon: 'trash', fileUplodeBtn: false, onClick: ()=>console.log("Byyy")  }
  ];

  

  return (
   <>
    <OutLetNameComponet register={register} errors={errors} form={form}/>
    <MobileOrEmailComponet mobile={true} register={register} errors={errors} form={form}/>
    <hr className="border-bottom" />
    <LocationComponet register={register} errors={errors} form={form} />
    <hr className="border-bottom" />
    <MobileOrEmailComponet register={register} errors={errors} form={form}/>
    <hr className="border-bottom" />
    <UploadFile heading={"Outlet Menu Uploaded File"} fileName={"Menu 1 for xyz company.docx"} fileSize={"25.05 KB"} buttons={buttons1} positionSize={"center"} positionButtons={"end"}  register={register} errors={errors} form={form}/>
    <hr className="border-bottom" />
   </>
  )
}

export default Outletdetails