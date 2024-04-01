import React from 'react'
import './Commisiondetailpage.css'
import Select from 'react-select';
import {  toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const options1 = [
    { value: '-Select-', label: '-Select-' },

    { value: '15', label: '15%' },
    { value: '16', label: '16%' },
    { value: '17', label: '17%' },
    { value: '18', label: '18%' },
    { value: '19', label: '19%' },
    { value: '20', label: '20%' }


]

const customStyles = {
    control: (provided) => ({
        ...provided,
        width: 'auto',
        minHeight: '1rem',
        padding: '3px',
        border: '1px solid grey',
        fontSize: "15px"
    })
}

function checkCommision (selectedOption , handleChange){

    if(selectedOption.value === "-Select-" ){

        toast.dark("Please Select Valid Commision Value ", {
            position: "top-center",
        });

    }else{


        handleChange({ target: { name: "comm", value: selectedOption.value } })


    }



}


function Commisiondetailpage({ values, handleBlur, handleChange, touched, errors }) {
    return (
        <div className='mainOutlet'>

            <div className='heading3'>
                <h5>Commission Details</h5>
            </div>

            <div id='commisionDeatilPage'>

                <label>
                    Commission<span className="mandatory">*</span>
                </label>

                <div id='comm'>


                    <Select
                        id='commInputField'
                        options={options1}
                        styles={customStyles}
                        isSearchable={false}
                        value={ options1.find((option) => option.value === values.comm )}
                        onChange={ (selectedOption) =>  checkCommision(selectedOption , handleChange)   }
                    />

                </div>

                {errors.comm && touched.comm ? <p className='form-error'  > {errors.comm}  </p> : null}

            </div>


        </div>
    )
}

export default Commisiondetailpage


