const generateDataObject = (NumberIndex,mobile) => {
    return [
      {
        id: mobile ? `mobileNumber${NumberIndex}`:`email${NumberIndex}`,
        labelName: "Name",
        idName: mobile ? `m_name${NumberIndex}`:`e_name${NumberIndex}`,
        type: "text",
        ID:mobile ? `mobileNumber${NumberIndex}`:`email${NumberIndex}`,
        required:NumberIndex == 1 ? true:false
        
      },
      {
        id:mobile ? `mobileNumber${NumberIndex}`:`email${NumberIndex}`,
        labelName: "Owner",
        idName: mobile ? `m_designation${NumberIndex}`:`e_designation${NumberIndex}`,
        type: "text",
        ID:mobile ? `mobileNumber${NumberIndex}`:`email${NumberIndex}`,
        required:NumberIndex == 1 ? true:false
       
      },
      {
        id:mobile ? `mobileNumber${NumberIndex}`:`email${NumberIndex}`,
        labelName:mobile? "Mobile No":"Email",
        idName:mobile ? `mobileNo${NumberIndex}`:`email${NumberIndex}`,
        type:mobile?"number" :'email' ,
        ID:mobile ? `mobileNumber${NumberIndex}`:`email${NumberIndex}`,
        required:NumberIndex == 1 ? true:false
       
      },
    ];
  };
  

export default generateDataObject;
  