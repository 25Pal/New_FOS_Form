import React from 'react'
import './Companydetailpage.css'




function comapanyDetailPage() {
  return (

    <div className='mainOutlet'>
      <div>
        <h5>Company Details</h5>
      </div>

      <div id='comapnyDetailsPage'>
        <form>

          <div className='identityDetails'>
            <div className='subInputField'>
              <div className='singleDetail'>
                <label>PAN No.</label>
                <input name='pan' placeholder='Enter PAN Card Number' />
              </div>

              <div className='singleDetail' >

                <label>GSTIN</label>
                <input name='pan' placeholder='Enter PAN Card Number' />



              </div>

            </div>


            <div className='subInputField'>


              <div className='singleDetail' style={{ marginTop: "1rem" }} >
                <label> FASSAI REF</label>
                <input name='pan' placeholder='Enter PAN Card Number' />


              </div>
              <div className='singleDetail' style={{ marginTop: "1rem" }}>

                <label>   FSSAI LIc</label>
                <input name='pan' placeholder='Enter PAN Card Number' />

              </div>
            </div>


          </div>

          <hr style={{ marginTop: "15px", boxShadow: "0px 0.6px 5px #CFCCCC", color: "#CFCCC" }} />

          <label>  Signing Authority</label>

          <div className='signingDetails'>

            <div className='subInputField' >

              <div className='singleDetail'>
                <label>  Signing Name</label>
                <input name='pan' placeholder='Enter Signing Name' />
              </div>

              <div className='singleDetail' >
                <label> Signing Designation </label>
                <input name='pan' placeholder='Enter Signing Designation' />
              </div>

            </div>

            <div className='subInputField'>
              <div className='singleDetail' >

                <label>   Signing Number </label>
                <input name='pan' placeholder='Enter Signing Number' />

              </div>
              <div className='singleDetail'>
                <label>   Signing Email </label>
                <input name='pan' placeholder='Enter Signing Email' />

              </div>

            </div>




          </div>
          <hr style={{ marginTop: "15px", boxShadow: "0px 0.6px 5px #CFCCCC", color: "#CFCCC" }} />

          <div className='billingDetails'>
            Register Billing Address
            <textarea style={{ height: "50px" }} placeholder=' Enter Biling Address'>

            </textarea>
          </div>

          <hr style={{ marginTop: "15px", boxShadow: "0px 0.6px 5px #CFCCCC", color: "#CFCCC" }} />

          <div className='typesOptions'>
            <div className='optionContainer'>
              <label> Ownership Type</label>
              <select style={{height:"2rem", padding:"3px"}}  >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>

            <div className='optionContainer'>
              <label>Business Type</label>
              <select style={{height:"2rem", padding:"3px"}}  >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>

          </div>
        </form>
      </div>




    </div>
  )
}

export default comapanyDetailPage