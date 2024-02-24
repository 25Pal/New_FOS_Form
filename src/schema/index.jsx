import * as Yup from "yup";

export const signUpSchema = Yup.object({
    // Outlet Name 
    brand_name: Yup.string().min(1, "Invalid Name").max(25, "Outlet name should be less than 25").required("Please Enter Valid Outlet Name"),

    //#Mobile 1
    bname: Yup.string().min(1, "Invalid Owner Name").max(25, "Outlet name limit exceed").required("Please Enter Valid Owner Name"),

    role: Yup.string().min(1, "Invalid Role").required("Invalid Role "),

    bmob: Yup.string().matches(/^\d{10}$/, 'Mobile number must contain exactly 10 digits').required("Please Enter Valid Mobile Number"),

    // outletemail: Yup.string().email().min(1, "Invalid Email").required("Please Enter Valid Email"),

    bemail: Yup.string().email("Invalid Email").min(1, "Invalid Email").required("Please Enter Valid Email"),

    //Location
    Outlet_address_street: Yup.string().min(1, "Invalid Outlet Name").required("Please Enter Valid Location "),

    //========= Company Details ===========\\
    //pan
    pan: Yup.string().min(10, "PAN should be exact 10 Digit").max(10, "PAN should be exact 10 Digit").required("Please Enter Valid PAN Number"),
    //GSTIN
    gstin: Yup.string().min(15, "GSTIN should be exact 15 Digit").max(15, "GSTIN should be exact 15 Digit").required("Please Enter Valid GSTIN Number"),
    //FASSAI Licencse 
    fssai: Yup.string().min(14, "FSSAI License should be exact 14 Digit").max(14, "FSSAI License should be exact 14 Digit").required("Please Enter Valid FSSAI License Number"),
    //FASSAI Ref Num
    // fssairef: Yup.string().min(0, "FSSAI Refrence should be exact 17 Digit").max(17, "FSSAI Refrence should be exact 17 Digit").required("Please Enter Valid FSSAI Refrence Number"),

    //Signing Name
    registered_name: Yup.string().min(1, "Invalid Register Name").required("Please Enter Valid Register Name"),
    //Designmation
    // role3: Yup.string().min(1, "Invalid Role").required("Invalid Role "),
    //Mobile Number
    o_mnumber: Yup.string().min(10, "Mobile number must be exactly 10 characters").max(10, "Mobile number must be exactly 10 characters").required("Please Enter Valid Mobile Number"),
    //Signing  Mail
    s_a_email: Yup.string().email().min(1, "Invalid Email").required("Please Enter Valid Email"),

    //Register Billing Address
    Billing_address_street: Yup.string().min(1, "Invalid Billing Address").required("Please Enter Valid Billing Address "),

    //Ownership Type
    ownership: Yup.string().min(1, "Invalid Ownership Type").required("Please select Ownership Type "),

    //Type of Business
    type_of_business: Yup.string().min(1, "Invalid Bussiness Type").required("Please select Business Type "),

    comm: Yup.string().min(1, "Commission is can not be empty").max(3, "Invalid Commission").required("Please Enter Valid Commision value"),

    //Other Deatils 

    fos_id: Yup.string().required("Please Select FOSID"),



})