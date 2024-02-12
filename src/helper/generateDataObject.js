const generateDataObject = (NumberIndex,data,mobile,register) => {
    const mobileNumber = data[`mobileNumber${NumberIndex}`];
    const email = data[`email${NumberIndex}`];
    return [
      {
        id: mobile ? `mobileNumber${NumberIndex}`:`email${NumberIndex}`,
        labelName: "Name",
        idName: mobile ? `m_name${NumberIndex}`:`e_name${NumberIndex}`,
        type: "text",
        value:mobile? mobileNumber?.name:email?.name,
        ID:mobile ? `mobileNumber${NumberIndex}`:`email${NumberIndex}`
        
      },
      {
        id:mobile ? `mobileNumber${NumberIndex}`:`email${NumberIndex}`,
        labelName: "Owner",
        idName: mobile ? `m_designation${NumberIndex}`:`e_designation${NumberIndex}`,
        type: "text",
        value:mobile? mobileNumber?.designation:email?.designation,
        ID:mobile ? `mobileNumber${NumberIndex}`:`email${NumberIndex}`
       
      },
      {
        id:mobile ? `mobileNumber${NumberIndex}`:`email${NumberIndex}`,
        labelName:mobile? "Mobile No":"Email",
        idName:mobile ? `mobileNo${NumberIndex}`:`email${NumberIndex}`,
        type:mobile?"number" :'email' ,
        value:mobile? mobileNumber?.mobileNo:email?.email,
        ID:mobile ? `mobileNumber${NumberIndex}`:`email${NumberIndex}`
       
      },
    ];
  };
  

export default generateDataObject;
  