import React, { useState } from 'react'
import SelectOption from '../../CustumComponet/SelectOption'
import LabelHeadingComponet from '../../CustumComponet/LabelHeadingComponet';

function generateTimeArray() {
    const times = [];
    let hours = 6;
    let minutes = 0;

    for (let i = 0; i < (24 * 4); i++) { // 24 hours * 4 (15 minutes intervals)
        const formattedTime = `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}`;
        times.push(formattedTime);

        minutes += 15;
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        if (hours === 6 && minutes === 0o0) {
            break;
        }

        if (hours === 24) {
            hours = 0;
        }
    }


    return times;
}

const TimesDetails = ({ register, errors, form }) => {
    const [switchState, setSwitchState] = useState({});

    const handleSwitchChange = (day, value) => {
        setSwitchState((prevState) => ({
            ...prevState,
            [day]: value
        }));
    }

    const timelist=generateTimeArray();
    
    const returnTimeSlots=(day,index)=>{
        return (
         <>
         <SelectOption
                            register={register}
                            options={day.timelist}
                            idName="fromTime"
                            lg={3}
                            md={3}
                            xs={6}
                            sm={6}
                            dynamicKey={`TimeDetails.${day.day}.${index}`}
                            errors={errors}
                            form={form}
                            time={true}
                        />
                       
                        <div className="col-lg-1 col-md-1 col-xs-1 col-sm-1">
                            <span>To</span>
                        </div>
                        <SelectOption
                            register={register}
                            options={day.timelist}
                            idName="toTime"
                            lg={3}
                            md={3}
                            xs={6}
                            sm={6}
                            dynamicKey={`TimeDetails.${day.day}`}
                            errors={errors}
                            form={form}
                            time={true}
                        />
                        <div className="col-lg-1 col-md-1 col-xs-1 col-sm-1">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM12 7C12 6.44772 11.5523 6 11 6C10.4477 6 10 6.44772 10 7V10H7C6.44772 10 6 10.4477 6 11C6 11.5523 6.44772 12 7 12H10V15C10 15.5523 10.4477 16 11 16C11.5523 16 12 15.5523 12 15V12H15C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10H12V7Z" fill="#3A3A3A" />
                            </svg>
                        </div>
         
         
         </>

        )
    }
    
    const handleAddSlots=(day,index)=>{
        returnTimeSlots(day,index);
    }

    const days = [
        { day: 'Monday', handleSwitchChange, switchState,timelist ,handleAddSlots},
        { day: 'Tuesday', handleSwitchChange, switchState ,timelist,handleAddSlots},
        { day: 'Wednesday', handleSwitchChange, switchState ,timelist,handleAddSlots},
        { day: 'Thursday', handleSwitchChange, switchState,timelist,handleAddSlots },
        { day: 'Friday', handleSwitchChange, switchState,timelist,handleAddSlots },
        { day: 'Saturday', handleSwitchChange, switchState,timelist,handleAddSlots },
        { day: 'Sunday', handleSwitchChange, switchState ,timelist,handleAddSlots},
    ]
    


    return (
        <>
        <div className='border border-1 border-dark rounded-4'>
            {days.map((day, index) => (
                <div key={index} className='container d-flex align-items-center justify-content-center p-2'>
                    <div className="row p-0.5 w-100 d-flex align-items-center p-2" >
                        <LabelHeadingComponet lable={true} headingDay={day.day} lg={2} xl={2} md={6} sm={6} xs={6} />
                        <div className='col-lg-2  col-xl-2 col-md-2  col-xs-6 col-sm-6'>
                            {
                                day.switchState[day.day] ? (<svg onClick={() => day.handleSwitchChange(day.day, !day.switchState[day.day])} id="toggleIcon" xmlns="http://www.w3.org/2000/svg" width="44" height="24" viewBox="0 0 44 24" fill="none">
                                    <path d="M0 12C0 5.37258 5.37258 0 12 0H32C38.6274 0 44 5.37258 44 12C44 18.6274 38.6274 24 32 24H12C5.37258 24 0 18.6274 0 12Z" fill="#56C568" />
                                    <circle cx="32" cy="12" r="10" fill="white" />
                                </svg>) : (<svg onClick={() => day.handleSwitchChange(day.day, !day.switchState[day.day])} id="toggleIcon" xmlns="http://www.w3.org/2000/svg" width="44" height="24" viewBox="0 0 44 24" fill="none">
                                    <path opacity="1" d="M0 12C0 5.37258 5.37258 0 12 0H32C38.6274 0 44 5.37258 44 12C44 18.6274 38.6274 24 32 24H12C5.37258 24 0 18.6274 0 12Z" fill="#525252" />
                                    <circle opacity="1" cx="12" cy="12" r="10" fill="white" />
                                </svg>)
                            }
                        </div>
                        <SelectOption
                            register={register}
                            options={day.timelist}
                            idName="fromTime"
                            lg={3}
                            md={3}
                            xs={6}
                            sm={6}
                            dynamicKey={`TimeDetails.${day.day}`}
                            errors={errors}
                            form={form}
                            time={true}
                        />
                       
                        <div className="col-lg-1 col-md-1 col-xs-1 col-sm-1">
                            <span>To</span>
                        </div>
                        <SelectOption
                            register={register}
                            options={day.timelist}
                            idName="toTime"
                            lg={3}
                            md={3}
                            xs={6}
                            sm={6}
                            dynamicKey={`TimeDetails.${day.day}`}
                            errors={errors}
                            form={form}
                            time={true}
                        />
                        <div className="col-lg-1 col-md-1 col-xs-1 col-sm-1">
                            <svg onClick={(e)=>day.handleAddSlots(day,index)} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM12 7C12 6.44772 11.5523 6 11 6C10.4477 6 10 6.44772 10 7V10H7C6.44772 10 6 10.4477 6 11C6 11.5523 6.44772 12 7 12H10V15C10 15.5523 10.4477 16 11 16C11.5523 16 12 15.5523 12 15V12H15C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10H12V7Z" fill="#3A3A3A" />
                            </svg>
                        </div>
                    </div>
                </div>
            ))}

        </div>
        </>
    )

}

export default TimesDetails
