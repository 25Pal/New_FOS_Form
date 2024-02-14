import React from 'react'
import './Outletdetailpage.css'
function outletDetailPage() {
    return (
        <div className='mainOutlet'>
            <div>
                <h5>Outlet Details</h5>
            </div>

            <div id='outletDetailsPage'>
                <form>
                    {/* #1Mobile one start */}
                    <div style={{ border: "0px solid red" }}>
                        <div>
                            <h6>
                                Outlet Name
                            </h6>
                        </div>
                        <div className='OutletInputFields'>

                            <div className='inputFields'>
                                <label htmlFor='outletname' >Name</label>
                                <input name='outletname' value="outletname" />
                            </div>


                        </div>
                        <div>
                            <h6>
                                Outlet Mobile #1
                            </h6>
                        </div>
                        <div className='OutletInputFields' >
                            <div className='inputFields'>
                                <label htmlFor='outletname1' >Name</label>
                                <input name='outletname1' value="outletname1" />
                            </div>

                            <div className='inputFields'>
                                <label>Designation</label>
                                <input name='outletdeg1' value="outletdeg1" />
                            </div>

                            <div className='inputFields'>
                                <label>Mobile Number</label>
                                <input name='outletmob1' value="outletmob1" />
                            </div>

                        </div>

                        <div>
                            <h6>
                                Outlet Mobile #2
                            </h6>
                        </div>
                        <div className='OutletInputFields' >
                            <div className='inputFields'>
                                <label>Name</label>
                                <input name='outletname2' value="outletname2" />

                            </div>
                            <div className='inputFields'>
                                <label>Designation</label>
                                <input name='outletdeg2' value="outletdeg2" />
                            </div>
                            <div className='inputFields'>
                                <label>Mobile Number</label>
                                <input name='outletmob2' value="outletmob2" />

                            </div>
                        </div>
                        <div>
                            <h6>
                                Outlet Mobile #3
                            </h6>
                        </div>
                        <div className='OutletInputFields'>
                            <div className='inputFields'>
                                <label>Name</label>
                                <input name='outletname3' value="outletname3" />

                            </div>
                            <div className='inputFields'>
                                <label>Designation</label>
                                <input name='outletdeg3' value="outletdeg3" />

                            </div>

                            <div className='inputFields'>
                                <label>Mobile Number</label>
                                <input name='outletmob3' value="outletmob3" />

                            </div>


                        </div>

                    </div>

                    {/* #1Mobile one end */}

                    <hr style={{ marginTop: "15px", boxShadow: "0px 0.6px 5px #CFCCCC", color: "#CFCCC" }} />


                    <div>
                        <h6>
                            Location
                        </h6>
                    </div>

                    <div className='OutletInputFields' >
                        <div className='inputFields'>

                            <textarea style={{ width: "100%", height: "auto" }} placeholder=' Enter Outlet Location'>

                            </textarea>

                        </div>



                    </div>

                    <div>
                        <h6>
                            Locality
                        </h6>
                    </div>

                    <div className='OutletInputFields'>
                        <div className='inputFields'>
                            <input name='outletemailname1' value="" placeholder=' Enter Locality ' />
                        </div>
                    </div>

                    <hr style={{ marginTop: "15px", boxShadow: "0px 0.6px 5px #CFCCCC", color: "#CFCCC" }} />


                    {/* #2Mobile one start */}
                    <div style={{ border: "0px solid blue", display: 'flex', flexDirection: 'column' }}>
                        <div>
                            <h6>
                                Outlet Email #1
                            </h6>
                        </div>

                        <div className='OutletInputFields' >
                            <div className='inputFields'>
                                <label>Name</label>
                                <input name='outletemailname1' value="outletemailname1" />


                            </div>
                            <div className='inputFields'>
                                <label>Designation</label>
                                <input name='outletemaildeg1' value="outletemaildeg1" />

                            </div>

                            <div className='inputFields'>
                                <label>Email</label>
                                <input name='outletemail1' value="outletemail1" />

                            </div>


                        </div>
                        <div>
                            <h6>
                                Outlet Email #2
                            </h6>
                        </div>
                        <div className='OutletInputFields'>
                            <div className='inputFields'>
                                <label>Name</label>
                                <input name='outletemailname2' value="outletemailname2" />

                            </div>
                            <div className='inputFields'>
                                <label>Designation</label>
                                <input name='outletemaildeg2' value="outletemaildeg2" />
                            </div>
                            <div className='inputFields'>
                                <label>Email</label>
                                <input name='outletemail2' value="outletemail2" />

                            </div>

                        </div>
                        <div>
                            <h6>
                                Outlet Email #3
                            </h6>
                        </div>
                        <div className='OutletInputFields'>
                            <div className='inputFields' >
                                <label>Name</label>
                                <input name='outletemailname3' value="outletemailname3" />

                            </div>
                            <div className='inputFields'>
                                <label>Designation</label>
                                <input name='outletemaildeg3' value="outletemaildeg3" />

                            </div>

                            <div className='inputFields'>
                                <label>Email</label>
                                <input name='outletemail3' value="outletemail3" />


                            </div>


                        </div>

                    </div>

                    {/* #2Mobile one end */}
                    <hr style={{ marginTop: "15px", boxShadow: "0px 0.6px 5px #CFCCCC", color: "#CFCCC" }} />


                    <div>
                        <div>
                            <h6>
                                Outlet Timmings
                            </h6>
                        </div>
                        <div className='timingTable'>

                        </div>
                    </div>

                    <hr style={{ marginTop: "15px", boxShadow: "0px 0.6px 5px #CFCCCC", color: "#CFCCC" }} />

                    <div>
                        <div>
                            <h6>
                                Outlet Menu Uploaded File
                            </h6>
                        </div>
                        <div className='MenuUploadContainerParent'>
                            <div className='MenuUploadContainer'>

                            <div>
                                File name
                            </div>

                            <div>
                                File size
                            </div>

                            </div>
                            
                            <div className='menuButtons'>
                                <button>eye</button>
                                <button>save</button>
                                <button>upload</button>
                            </div>

                        </div>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default outletDetailPage