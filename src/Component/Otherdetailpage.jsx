import React, { useEffect } from 'react'
import Select from 'react-select';

import './Otherdetail.css'


function Otherdetailpage({ values, handleBlur, handleChange, touched, errors, handleReset, reset }) {


  const FOSIDs = [
    { value: '-Select-', label: '-Select-' },
    { value: 'FOS001 - Rakesh pokale', label: 'FOS001 - Rakesh pokale' },
    { value: 'FOS002 - Umesh shukla', label: 'FOS002 - Umesh shukla' },
    { value: 'FOS003 - Kishan Soni', label: 'FOS003 - Kishan Soni' },
    { value: 'FOS004 - Sumit More', label: 'FOS004 - Sumit More' },
    { value: 'FOS005 - Anil Yadav', label: 'FOS005 - Anil Yadav' },
    { value: 'FOS006 - Irfan Khan', label: 'FOS006 - Irfan Khan' },
    { value: 'FOS007 - Sachin Nanavare', label: 'FOS007 - Sachin Nanavare' },
    { value: 'FOS008 - Mohammed Rafique Shaikh Jabir', label: 'FOS008 - Mohammed Rafique Shaikh Jabir' },
    { value: 'FOS009 - Arif Shaikh', label: 'FOS009 - Arif Shaikh' },
    { value: 'FOS010 - Pranal', label: 'FOS010 - Pranal' },
    { value: 'FOS011 - Rafique Ahmed Shaikh', label: 'FOS011 - Rafique Ahmed Shaikh' },
    { value: 'FOS012 - Saiyed Tabrej', label: 'FOS012 - Saiyed Tabrej' },
    { value: 'FOS013 - Wasim Qureshi', label: 'FOS013 - Wasim Qureshi' },
    { value: 'FOS014 - Bablu Sharma', label: 'FOS014 - Bablu Sharma' },
    { value: 'FOS015 - Swapnil Usare', label: 'FOS015 - Swapnil Usare' },
    { value: 'FOS016 - Sumit Sharma', label: 'FOS016 - Sumit Sharma' },
    { value: 'FOS017 - Farhan Tamboli', label: 'FOS017 - Farhan Tamboli' },
    { value: 'FOS018 - Wasim Akhtar Sheik', label: 'FOS018 - Wasim Akhtar Sheik' },
    { value: 'FOS019 - Karan Gaud', label: 'FOS019 - Karan Gaud' },
    { value: 'FOS020 - Anurag Singh', label: 'FOS020 - Anurag Singh' },
    { value: 'FOS021 - Sajid Sayyed', label: 'FOS021 - Sajid Sayyed' },
    { value: 'FOS022 - Imran Shaikh', label: 'FOS022 - Imran Shaikh' },
    { value: 'FOS023 - Shahid Khan', label: 'FOS023 - Shahid Khan' },
    { value: 'FOS024 - Shoeb shaikh', label: 'FOS024 - Shoeb shaikh' },
    { value: 'FOS025 - Uday Singh', label: 'FOS025 - Uday Singh' },
    { value: 'FOS026 - Prasad Mahamuni', label: 'FOS026 - Prasad Mahamuni' },
    { value: 'FOS027 - Ashok Abhiman Salunke', label: 'FOS027 - Ashok Abhiman Salunke' },
    { value: 'FOS028 - Irfan Shaikh', label: 'FOS028 - Irfan Shaikh' },
    { value: 'FOS029 - Omprakash', label: 'FOS029 - Omprakash' },
    { value: 'FOS030 - Sunny Sarkar', label: 'FOS030 - Sunny Sarkar' },
    { value: 'FOS031 - Mahendra Arakh', label: 'FOS031 - Mahendra Arakh' },
    { value: 'FOS032 - Manoj Bable', label: 'FOS032 - Manoj Bable' },
    // Add all other elements here
    { value: 'FOS133', label: 'FOS133' },
    { value: 'FOS134', label: 'FOS134' },
    { value: 'FOS135', label: 'FOS135' },
    { value: 'FOS136', label: 'FOS136' },
    { value: 'FOS137', label: 'FOS137' },
    { value: 'FOS138', label: 'FOS138' },
    { value: 'FOS139', label: 'FOS139' },
    { value: 'FOS140', label: 'FOS140' },
    { value: 'FOS141', label: 'FOS141' },
    { value: 'FOS142', label: 'FOS142' },
    { value: 'FOS143', label: 'FOS143' },
    { value: 'FOS144', label: 'FOS144' },
    { value: 'FOS145', label: 'FOS145' },
    { value: 'FOS146', label: 'FOS146' },
    { value: 'FOS147', label: 'FOS147' },
    { value: 'FOS148', label: 'FOS148' },
    { value: 'FOS149', label: 'FOS149' },
    { value: 'FOS150', label: 'FOS150' },
    { value: 'FOS151', label: 'FOS151' },
    { value: 'FOS152', label: 'FOS152' },
    { value: 'FOS153', label: 'FOS153' },
    { value: 'FOS154', label: 'FOS154' },
    { value: 'FOS155', label: 'FOS155' },
    { value: 'FOS156', label: 'FOS156' },
    { value: 'FOS157', label: 'FOS157' },
    { value: 'FOS158', label: 'FOS158' },
    { value: 'FOS159', label: 'FOS159' },
    { value: 'FOS160', label: 'FOS160' },
    { value: 'FOS161', label: 'FOS161' },
    { value: 'FOS162', label: 'FOS162' },
    { value: 'FOS163', label: 'FOS163' },
    { value: 'FOS164', label: 'FOS164' },
    { value: 'FOS165', label: 'FOS165' },
    { value: 'FOS166', label: 'FOS166' },
    { value: 'FOS167', label: 'FOS167' },
    { value: 'FOS168', label: 'FOS168' },
    { value: 'FOS169', label: 'FOS169' },
    { value: 'FOS170', label: 'FOS170' },
    { value: 'FOS171', label: 'FOS171' },
    { value: 'FOS172', label: 'FOS172' },
    { value: 'FOS173', label: 'FOS173' },
    { value: 'FOS174', label: 'FOS174' },
    { value: 'FOS175', label: 'FOS175' },
    { value: 'FOS176', label: 'FOS176' },
    { value: 'FOS177', label: 'FOS177' },
    { value: 'FOS178', label: 'FOS178' },
    { value: 'FOS179', label: 'FOS179' },
    { value: 'FOS180', label: 'FOS180' },
    { value: 'FOS181', label: 'FOS181' },
    { value: 'FOS182', label: 'FOS182' },
    { value: 'FOS183', label: 'FOS183' },
    { value: 'FOS184', label: 'FOS184' },
    { value: 'FOS185', label: 'FOS185' },
    { value: 'FOS186', label: 'FOS186' },
    { value: 'FOS187', label: 'FOS187' },
    { value: 'FOS188', label: 'FOS188' },
    { value: 'FOS189', label: 'FOS189' },
    { value: 'FOS190', label: 'FOS190' },
    { value: 'FOS191', label: 'FOS191' },
    { value: 'FOS192', label: 'FOS192' },
    { value: 'FOS193', label: 'FOS193' },
    { value: 'FOS194', label: 'FOS194' },
    { value: 'FOS195', label: 'FOS195' },
    { value: 'FOS196', label: 'FOS196' },
    { value: 'FOS197', label: 'FOS197' },
    { value: 'FOS198', label: 'FOS198' },
    { value: 'FOS199', label: 'FOS199' },
    { value: 'FOS200', label: 'FOS200' },
    { value: 'TEST', label: 'TEST' }
  ];


  const customStyles1 = {
    control: (provided) => ({
      ...provided,
      width: '100%',
      minHeight: '1rem',
      padding: '3px',
      border: '1px solid grey',
      fontSize: "15px"
    })
  }
  

  

  return (
    <div className='mainOutlet'>

      <div className='heading4'>
        <h5>Other Details</h5>
      </div>

      <div id='otherDeatilPage'>
        <div>
          <div className='childContainer'>

            <label>
              FOS ID<span className="mandatory">*</span>
            </label>

            <div id='fosid' name="fos_id">
              {/* <input id='fosInputField' name='fos_id' value={values.fos_id} onChange={handleChange} onBlur={handleBlur} placeholder='Select FOSID' />
                { errors.fos_id && touched.fos_id ?   <p  className='form-error'  > {errors.fos_id}  </p> : null  }
            */}

              <Select
                id='fosInputField'
                options={FOSIDs}
                styles={customStyles1}
                isSearchable={false}
                // value={values.fos_id} 
                value={FOSIDs.find((option) => option.value === values.fos_id)}
                onChange={(selectedOption) => handleChange({ target: { name: "fos_id", value: selectedOption.value } })}

              />
            </div>


          </div>
          {errors.fos_id && touched.fos_id ? <p className='form-error'  > {errors.fos_id}  </p> : null}

        </div>


        <div>
          <div className='childContainer'>
            <label>
              Remark
            </label>
            <div id='fosid'>
              <input id='remarkInputField' name='remarks' value={values.remarks} onChange={handleChange} placeholder='Enter Remark' />
            </div>
          </div>
        </div>




      </div>
    </div>
  )
}

export default Otherdetailpage