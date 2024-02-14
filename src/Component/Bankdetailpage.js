import React from 'react'
import './Bankdetailpage.css'


function bankDetailPage() {
  return (
    <div className='mainOutlet'>
      <div>
        <h5>Bank Details</h5>
      </div>

      <div id='bankDetailsPage'>
        <div>
          <div>
            <div>
              Beneficiary Name
            </div>
            <div>
              Beneficiary Account No.
            </div>
          </div>
          <div>
            <div>
              Beneficiary Bank Name
            </div>
            <div>
              Beneficiary IFSC Code
            </div>
          </div>

        </div>
        <hr style={{ marginTop: "15px", boxShadow: "0px 0.6px 5px #CFCCCC", color: "#CFCCC" }} />
       
        <div>
          <div>
            <h6>
              Cheque Upload and Download
            </h6>
          </div>
          <div className='MenuUploadContainerParent'>
            <div className='MenuUploadContainer'>

              <div>
                cheque.png
              </div>

              <div>
                25.05 KB
              </div>

            </div>

            <div className='menuButtons'>
              <button>eye</button>
              <button>save</button>
              <button>upload</button>
            </div>

          </div>
        </div>
        
      </div>




    </div>
  )
}

export default bankDetailPage