import React from 'react'
import ButtonGroup from './ButtonGroup'
import LabelHeadingComponet from './LabelHeadingComponet'

const UploadFile = ({heading,fileName,fileSize,buttons,positionSize,positionButtons,register, errors, form}) => {
  return (
    <>
        {/* <label>{heading}</label> */}
        <LabelHeadingComponet lable={false} heading={heading} />
        <div className="row align-items-center d-flex flex-wrap justify-content-start">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 ">
            <div className="">{fileName}</div>
          </div>
          <div className={`col-lg-4 col-md-4 col-sm-4 col-xs-4 d-flex justify-content-lg-${positionSize}`}>
            <div className="p-1">{fileSize}</div>
          </div>
          <div className={`col-lg-4 col-md-4 col-sm-4 col-xs-4 d-flex align-items-center justify-content-lg-${positionButtons}`}>
          <ButtonGroup buttons={buttons} />
          </div>
        </div>
    </>
  )
}

export default UploadFile