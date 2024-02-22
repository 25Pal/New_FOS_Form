import React from "react";
import SelectOption from "../../CustumComponet/SelectOption";
import LabelHeadingComponet from "../../CustumComponet/LabelHeadingComponet";
import TextArea from "../../CustumComponet/TextArea";

const ownerTypeOption = [
  { name: "Private Company" },
  { name: "Public Company" },
  { name: "Partnership" },
  { name: "Sole Proprietor" },
  { name: "LLP" },
];

const OtherDetails = ({ register, errors, form }) => {
  return (
      <div className="row">
        <SelectOption
          register={register}
          options={ownerTypeOption}
          idName="otherDetails"
          lableName="FOS ID"
          lg={6}
          dynamicKey="OtherDetails"
          errors={errors}
          form={form}
          required={true}
        />
        <TextArea
          labelName="Remark"
          idName="remark"
          dynamicKey="OtherDetails"
          register={register}
          errors={errors} 
          lg={12}
        />
      </div>
  );
};

export default OtherDetails;
