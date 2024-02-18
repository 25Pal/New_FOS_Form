import React from 'react'
import MobileOrEmailComponet from '../../CustumComponet/MobileOrEmailComponet'

import LabelHeadingComponet from '../../CustumComponet/LabelHeadingComponet'
import ButtonGroup from '../../CustumComponet/ButtonGroup'
import UploadFile from '../../CustumComponet/UploadFile'
import OutLetNameComponet from './OutLetNameComponet'
import LocationComponet from './LocationComponet'
const buttons1 = [
    { color: 'success', icon: 'eye' },
    { color: 'primary', icon: 'upload' },
    { color: 'danger', icon: 'trash' }
  ];
const Outletdetails = ({register,errors,form}) => {
  return (
   <>
    <OutLetNameComponet register={register} errors={errors} form={form}/>
    <MobileOrEmailComponet mobile={true} register={register} errors={errors} form={form}/>
    <hr className="border-bottom" />
    <LocationComponet register={register} errors={errors} form={form} />
    <hr className="border-bottom" />
    <MobileOrEmailComponet register={register} errors={errors} form={form}/>
    <hr className="border-bottom" />
    <UploadFile heading={"Outlet Menu Uploaded File"} fileName={"Menu 1 for xyz company.docx"} fileSize={"25.05 KB"} buttons={buttons1} positionSize={"center"} positionButtons={"end"} />
    <hr className="border-bottom" />
   </>
  )
}

export default Outletdetails