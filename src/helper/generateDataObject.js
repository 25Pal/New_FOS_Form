const generateDataObject = (NumberIndex,data,mobile,register) => {
    const mobileNumber = data[`mobileNumber${NumberIndex}`];
    const email = data[`email${NumberIndex}`];
    return [
      {
        id: mobile ? `name${mobile+NumberIndex}`:`name${NumberIndex}`,
        labelName: "Name",
        idName: mobile ? `m_name${NumberIndex}`:`e_name${NumberIndex}`,
        type: "text",
        value:mobile? mobileNumber?.name:email?.name,
        register:register
      },
      {
        id:mobile ? `designation${mobile+NumberIndex}`:`designation${NumberIndex}`,
        labelName: "Owner",
        idName: mobile ? `m_designation${NumberIndex}`:`e_designation${NumberIndex}`,
        type: "text",
        value:mobile? mobileNumber?.designation:email?.designation,
        register:register
      },
      {
        id:mobile ? `mobileNo${NumberIndex+mobile}`:`email${NumberIndex}`,
        labelName:mobile? "Mobile No":"Email",
        idName:mobile ? `mobileNo${NumberIndex}`:`email${NumberIndex}`,
        type:mobile?"number" :'email' ,
        value:mobile? mobileNumber?.mobileNo:email?.email,
        register:register
      },
    ];
  };
  

export default generateDataObject;
  