
import './App.css';

import Compannydetailpage from './Component/Comapanydeatilpage';
import Bankdetailspage from './Component/Bankdetailpage';
import Outletdetailpage from './Component/Outletdetailpage';
import HeaderImage from './Component/HeaderImage';
import Otherdetailpage from './Component/Otherdetailpage';
import Commisiondetailpage from './Component/Commisiondetailpage';

import { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from "react-toastify"
import { useFormik } from 'formik';

import validator from 'validator';
import axios from 'axios';
import { signUpSchema } from "./schema";
import CameraComponent from './Component/CameraComponent';
import Outletphotos from './Component/OutletPhotosComponent';
import Spinner from 'react-bootstrap/Spinner';


function App() {
  const brandNameRef = useRef(null);


  const [formData, setFormData] = useState(
    {

      //========== Outlet Details =========\\
      "brand_name": "",

      //#M1
      "bname": "",
      "role": "",
      "bmob": "",
      "outletemail": "",
      "bemail": "",

      //#M2

      "oname": "",
      "role1": "",
      "omob": "",
      "oemail": "",


      //#M 3 - Missing 
      "name3": "",
      "role2": "",
      "email3": "",
      "omob3": "",

      //Location
      "Outlet_address_street": "",

      //Locality
      "Outlet_address_locality": "",

      //Timing Pending 
      "timeData": [],
      //Menu Upload Pending(New UI)

      "menuImage": "",
      "menuFileName": "",
      "menuFileSize": "",





      //========= Company Details ===========\\
      //pan
      "pan": "",
      //GSTIN
      "gstin": "",
      //FASSAI Licencse 
      "fssai": "",
      //FASSAI Ref Num
      "fssairef": "",

      //Signing Name
      "registered_name": "",

      //Mobile Number
      "o_mnumber": "",

      //Signing  Mail
      "s_a_email": "",

      //Register Billing Address
      "Billing_address_street": "",

      //Ownership Type
      "ownership": "",

      //Type of Business
      "type_of_business": "",

      //=======  Bank Details ==========\\

      //Benificiary Name 
      "bankname": "",
      //Benificiary Acc Num
      "bankaccountnum": "",
      //IFSC code 
      "ifsc": "",
      //Bank Name  
      "userBankName": "",


      //Check Upload and Download Missing 

      "userChequeImage": "",
      "userChequeImageName": "",
      "userChequeImageSize": "",



      //Commision Details
      "comm": "",

      //Other Deatils 

      "fos_id": "",
      "remarks": "",

      //Take a Photo

      "ownerPhoto": "",
      //Outlet 4 photos 
      "outletphotos": [],
      "Outlet_address_pincode": "",
      "Billing_address_pincode": "",
      "Billing_address_locality": "",

      "loc": "",
      "loc_lat": "",
      "loc_lon": "",
      "w_o_time": "",
      "w_c_time": "",
      "wk_o_time": "",
      "wk_c_time": "",
      "menu_url": "",
    }
  )


  const [isRefReady, setIsRefReady] = useState(false);
  const [submitBtn, setSubmitBtn] = useState(false);

  useEffect(() => {

    if (brandNameRef.current) {
      setIsRefReady(true);
    }

  }, [brandNameRef]);

  const handlTimeReturn = (timeDataArray) => {
    console.log("------------>>>>>=========", timeDataArray)
    handleChange({
      target: {
        name: 'timeData',
        value: timeDataArray // New value for the field
      }
    });
  }

  const saveOwnerPhoto = (photoData) => {
    console.log("---------->saveOwnerPhoto", photoData);

    handleChange({
      target: {
        name: 'ownerPhoto',
        value: photoData,
      }
    });

  }


  const saveOutletsPhoto = (photoData) => {
    console.log("---------->saveOutletsPhoto<-------", photoData);

    handleChange({
      target: {
        name: 'outletphotos',
        value: photoData,
      }
    });

  }

  //------------------  Formik Integration ----------------------\\
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setErrors, setTouched, setFieldError } = useFormik({

    initialValues: formData,
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
     
      axios.post("https://apis.saveeat.in/api/v1/adminUser/getfosdata1", values)
      // axios.post("http://localhost:3032/api/v1/adminUser/getfosdata1", values)

        .then((response) => {
          toast.success("Form Submitted Successfully!", {
            position: "top-center",
            autoClose: 2000,
            onClose: () => {
              window.location.reload();
            }
          });
        })
        .catch((error) => {
          // Handle error
          toast.error("An error occurred. Please try again later.");
        });
    },

  });



  const handleSubmit1 = async (e) => {

    e.preventDefault();

    console.log("--------------- Inside Handle Submit -------------------")

    //here call function to set LAT and long 
    let locationofoutlet = values.Outlet_address_street

    let success = await setLatitudeAndLongitude(locationofoutlet, handleChange);

    console.log("Response from  setLatitudeAndLongitude  Function  ======>>> ", success)

    if (Object.keys(errors).length > 0 ) { // Change formik.errors to values.errors

      console.log("-------- Errors Found in Schema -------", Object.keys(errors).length, success)
      scrollToFirstError(success);

    } else {

      console.log("------------------ Inside Else Condition -----------", Object.keys(errors).length, success)

      if (success === false) {

        // toast.error("Invalid Outlet Location !");

        scrollToFirstError(success);
        return false;

      } else {

        console.log("----------- Form Submitted --------")
        setSubmitBtn(false);

        handleSubmit();
      }


    }
  };

  // Function to find the first field with an error and scroll to it
  const scrollToFirstError = (success) => {

    console.log("-------- Inside scrollToFirstError Function ----------", success, errors)
    const firstErrorField = Object.keys(errors)[0];

    if(firstErrorField){
      const firstErrorFieldElement = document.querySelector(`[name='${firstErrorField}']`);
      console.log("----------firstErrorFieldElement ----------", Object.keys(errors)[0], firstErrorFieldElement)
      firstErrorFieldElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
      firstErrorFieldElement.focus();
  
      handleSubmit();
  
      console.log("Form Submitted from scrollToFirstError function ", Object.keys(errors).length)
  
  
    }else if(Object.keys(errors).length === 0 && success == false){


      const getOutletLocationField = document.querySelector(`[name='Outlet_address_street']`);

      console.log("getOutletLocationField -------->", getOutletLocationField)

      if (getOutletLocationField) {

        getOutletLocationField.scrollIntoView({ behavior: 'smooth', block: 'start' });

        getOutletLocationField.focus();
        getOutletLocationField.style.border = '1px solid red';

        getOutletLocationField.addEventListener('input', () => {
          getOutletLocationField.style.border = '1px solid #d4d4d4'; // Remove border style
        });

      }


      toast.error("Please Put proper Outlet Location !")

    }

    
    // if (success === true) {

    //   const firstErrorField = Object.keys(errors)[0];
    //   const firstErrorFieldElement = document.querySelector(`[name='${firstErrorField}']`);
    //   console.log("----------firstErrorFieldElement ----------", Object.keys(errors)[0], firstErrorFieldElement)
    //   firstErrorFieldElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    //   firstErrorFieldElement.focus();

    //   handleSubmit();

    //   console.log("Form Submitted from scrollToFirstError function ", Object.keys(errors).length)

    // }
    // else {

     


    //   console.log("Inside else of scrollToFirstError ")

    //   const getOutletLocationField = document.querySelector(`[name='Outlet_address_street']`);

    //   console.log("getOutletLocationField -------->", getOutletLocationField)

    //   if (getOutletLocationField) {

    //     getOutletLocationField.scrollIntoView({ behavior: 'smooth', block: 'start' });

    //     getOutletLocationField.focus();
    //     getOutletLocationField.style.border = '1px solid red';

    //     getOutletLocationField.addEventListener('input', () => {
    //       getOutletLocationField.style.border = '1px solid #d4d4d4'; // Remove border style
    //     });

    //   }


    // }



  }

  /* global google */

  const setLatitudeAndLongitude = (locationofoutlet, handleChange) => {
    console.log("Inside setLatitudeAndLongitude ===>>>", locationofoutlet);

    return new Promise((resolve, reject) => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: locationofoutlet }, (results, status) => {

        if (status === 'OK' && results.length > 0) {
          const coordinates = results[0].geometry.location;
          const latitude = coordinates.lat();
          const longitude = coordinates.lng();

          console.log("let long ,", latitude, longitude);

          handleChange({
            target: {
              name: 'loc_lat',
              value: latitude
            }
          });

          handleChange({
            target: {
              name: 'loc_lon',
              value: longitude
            }
          });

          resolve(true);
        } else {


          resolve(false);

        }
      });
    });
  };






  return (

    <div className="App" >

      <form className='MainForm' onSubmit={handleSubmit1}>

        <HeaderImage />
        <Outletdetailpage handleChange={handleChange} handleBlur={handleBlur} values={values} errors={errors} touched={touched} brandNameRef={brandNameRef} handlTimeReturn={handlTimeReturn} />
        <Compannydetailpage handleChange={handleChange} handleBlur={handleBlur} values={values} errors={errors} touched={touched} />
        <Bankdetailspage handleChange={handleChange} handleBlur={handleBlur} values={values} errors={errors} touched={touched} />
        <CameraComponent onPhotoCapture={(photoData) => saveOwnerPhoto(photoData)} handleChange={handleChange} />
        <Outletphotos saveOutletsPhoto={saveOutletsPhoto} handleChange={handleChange} values={values} errors={errors} touched={touched} />
        <Commisiondetailpage handleChange={handleChange} handleBlur={handleBlur} values={values} errors={errors} touched={touched} />
        <Otherdetailpage handleChange={handleChange} handleBlur={handleBlur} values={values} errors={errors} touched={touched} />
        <div className='saveBtn'>
          {
            submitBtn ? <Spinner animation="border" variant="success" /> : <button type='submit'     > Submit </button>

          }


        </div>

      </form>

      <ToastContainer />



    </div>
  );
}

export default App;
