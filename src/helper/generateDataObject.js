const generateDataObject = (NumberIndex,data,mobile) => {
    const mobileNumber = data[`mobileNumber${NumberIndex}`];
    const email = data[`email${NumberIndex}`];
    return [
      {
        id: mobile ? `name${mobile+NumberIndex}`:`name${NumberIndex}`,
        labelName: "Name",
        idName: "name",
        type: "text",
        value:mobile? mobileNumber?.name:email?.name,
      },
      {
        id:mobile ? `designation${mobile+NumberIndex}`:`designation${NumberIndex}`,
        labelName: "Owner",
        idName: "designation",
        type: "text",
        value:mobile? mobileNumber?.designation:email?.designation,
      },
      {
        id:mobile ? `mobileNo${NumberIndex+mobile}`:`email${NumberIndex}`,
        labelName:mobile? "Mobile No":"Email",
        idName:mobile? "mobileNo":"email",
        type:mobile?"number" :'email' ,
        value:mobile? mobileNumber?.mobileNo:email?.email,
      },
    ];
  };
  

export default generateDataObject;
  