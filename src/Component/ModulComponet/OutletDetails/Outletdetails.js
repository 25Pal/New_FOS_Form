import React, { useEffect, useState } from 'react'
import MobileOrEmailComponet from '../../CustumComponet/MobileOrEmailComponet'

import LabelHeadingComponet from '../../CustumComponet/LabelHeadingComponet'
import ButtonGroup from '../../CustumComponet/ButtonGroup'
import UploadFile from '../../CustumComponet/UploadFile'
import OutLetNameComponet from './OutLetNameComponet'
import LocationComponet from './LocationComponet'

const Outletdetails = ({register,errors,form}) => {
  
  const{setValue}=form;
  const [selectedFile, setSelectedFile] = useState({});

  const handleFileInputChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      
    }
  };

  const handleFileDelete = () => {
    setSelectedFile({});
  };
  
  
  const habdleViewImage = () => {
    if (selectedFile && selectedFile.type && selectedFile.type.startsWith('image')) {
      const blob = new Blob([selectedFile], { type: selectedFile.type });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    } else {
      console.error("Selected file is not an image.");
      // You may want to display an error message to the user if the selected file is not an image
    }
  };
  
  const buttons1 = [
    {id:'Mneu' ,color: 'success', icon: 'eye', fileUplodeBtn: false, onClick: habdleViewImage,selectedFile:selectedFile },
    {id:'Menu', color: 'primary', icon: 'upload', fileUplodeBtn: true, onClick: handleFileInputChange,selectedFile:selectedFile },
    {id:'Menu' ,color: 'danger', icon: 'trash', fileUplodeBtn: false, onClick: handleFileDelete ,selectedFile:selectedFile }
  ];

  useEffect(() => {
    // Update the selectedFileName value when selectedFile changes
    setValue('OutletDetails.selectedFile.name', selectedFile.name ? selectedFile.name:"");
    setValue('OutletDetails.selectedFile.size', selectedFile.size ? selectedFile.size:"");
  }, [selectedFile, setValue]);


  return (
   <>
    <OutLetNameComponet register={register} errors={errors} form={form}/>
    <MobileOrEmailComponet mobile={true} register={register} errors={errors} form={form}/>
    <hr className="border-bottom" />
    <LocationComponet register={register} errors={errors} form={form} />
    <hr className="border-bottom" />
    <MobileOrEmailComponet register={register} errors={errors} form={form}/>
    <hr className="border-bottom" />
    <UploadFile heading={"Outlet Menu Uploaded File"} fileName={selectedFile.name ? selectedFile.name:'File-Name' } fileSize={selectedFile.size ? selectedFile.size/1000 + "Kb" :'File Size'} buttons={buttons1} positionSize={"center"} positionButtons={"end"}  register={register} errors={errors} form={form}/>
    <hr className="border-bottom" />
   </>
  )
}

export default Outletdetails