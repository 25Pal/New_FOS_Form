import React, { useEffect, useState } from "react";
import SelectOption from "../../CustumComponet/SelectOption";
import LabelHeadingComponet from "../../CustumComponet/LabelHeadingComponet";
import { useFieldArray } from "react-hook-form";


const TimesDetails = ({ register, errors, form }) => {
  const [switchState, setSwitchState] = useState({});

  const { control,watch } = form;

  const handleSwitchChange = (day, value) => {
    setSwitchState((prevState) => ({
      ...prevState,
      [day]: value,
    }));
  };
  
  const getTimeOption = (startTime) => {
    if (!startTime) {
        // Handle the case when startTime is undefined
        return { options: [], disablePlusIcon: false };
    }

    const [startHour, startMinute] = startTime.split(":").map(Number);
    const options = [];
    let dd = 0;

    if ((startHour <= 5 && startHour >= 0) || startTime === "06:00") {
        for (let hour = startHour; hour < 6; hour++) {
            let minute2;
            if (dd == 0) {
                minute2 = startMinute;
            } else {
                minute2 = 0;
            }
            for (let minute = minute2; minute < 60; minute += 15) {
                const hh = (hour % 24).toString().padStart(2, "0");
                const mm = minute.toString().padStart(2, "0");
                options.push(`${hh}:${mm}`);
            }
            dd++;
        }
    } else {
        for (let hour = startHour; hour < 30; hour++) {
            let minute2;
            if (dd == 0) {
                minute2 = startMinute;
            } else {
                minute2 = 0;
            }
            for (let minute = minute2; minute < 60; minute += 15) {
                const hh = (hour % 24).toString().padStart(2, "0");
                const mm = minute.toString().padStart(2, "0");
                options.push(`${hh}:${mm}`);
            }
            dd++;
        }
    }

    return {
        options,
        disablePlusIcon:
            options.length > 0 && options[options.length - 1] === "06:00",
    };
};

const addMinutes = (time, minutes) => {
  if (!time) {
    return ""; // Return empty string or handle the case appropriately
  }

  const [hours, currentMinutes] = time.split(":").map(Number);
  const newMinutes = (currentMinutes + minutes) % 60;
  const newHours = hours + Math.floor((currentMinutes + minutes) / 60);
  return `${String(newHours).padStart(2, "0")}:${String(newMinutes).padStart(
    2,
    "0"
  )}`;
};

  const time=getTimeOption('6:00');
  
  const timelist=time.options;

  const renderTimeSelector = (day, idName, index) => {
    let fromTimeOptions = day.timeArrya.fromTimeSlot;
    let toTimeOptions = day.timeArrya.toTimeSlot;
    let fromTime='';
    let toTime='';
    if (index === 0) {
        const initialTime = getTimeOption('6:00');
        fromTimeOptions = initialTime ? initialTime.options : [];
        fromTime =watch(`TimeDetails.${day.day}.Slots[${index}].slot.fromTime`);
        const toTimeOption = getTimeOption(addMinutes(fromTime,15));
        toTimeOptions = toTimeOption ? toTimeOption.options : [];
    } else {
        toTime = watch(`TimeDetails.${day.day}.Slots[${index - 1}].slot.toTime`);
        const timeOption = getTimeOption(addMinutes(toTime,15));
        fromTimeOptions = timeOption ? timeOption.options : [];
        fromTime = watch(`TimeDetails.${day.day}.Slots[${index}].slot.fromTime`);
        const toTimeOption = getTimeOption(addMinutes(fromTime,15));
        toTimeOptions = toTimeOption ? toTimeOption.options : [];
    }
    
    return (
        <SelectOption
            register={register}
            options={idName === 'fromTime' ? fromTimeOptions : toTimeOptions}
            idName={idName}
            lg={3}
            md={3}
            xs={6}
            sm={6}
            dynamicKey={`TimeDetails.${day.day}.Slots[${index}].slot`}
            errors={errors}
            form={form}
            time={true}
            disabled={!day.switchState[day.day] || fromTime==='05:45' || toTime === '05:45'}
        />
    );
};

  const returnTimeSlots = (day, slot, index) => {
    return (
      <div className="row d-flex align-items-center pt-2 justify-content-end">
        {renderTimeSelector(day, 'fromTime', index + 1)}
        <div className="col-lg-1 col-md-1 col-xs-1 col-sm-1 text-center">
          <span>To</span>
        </div>
        {renderTimeSelector(day, 'toTime', index + 1)}

        <div className="col-lg-1 col-md-1 col-xs-1 col-sm-1">

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
            onClick={() => {
              if (day.switchState[day.day]) {
                  handleRemoveSlot(slot.id);
              }
            }}
            style={{
              cursor: day.switchState[day.day] ? "pointer" : "not-allowed",
              opacity: day.switchState[day.day] ? "1" : "0.5",
              // disabled:day.switchState[day.day] ? false : true
              pointerEvents: day.switchState[day.day] ? "auto" : "not-allowed"
            }}
          >
            <path d="M6.64536 8.65393C5.94422 8.65393 5.37583 9.22232 5.37583 9.92346C5.37583 10.6246 5.94422 11.193 6.64536 11.193H13.4162C14.1173 11.193 14.6857 10.6246 14.6857 9.92346C14.6857 9.22232 14.1173 8.65393 13.4162 8.65393H6.64536Z" fill="#FF4848" />
            <path fillRule="evenodd" clipRule="evenodd" d="M10.0308 0.19043C4.65536 0.19043 0.297729 4.54806 0.297729 9.92346C0.297729 15.2989 4.65536 19.6565 10.0308 19.6565C15.4062 19.6565 19.7638 15.2989 19.7638 9.92346C19.7638 4.54806 15.4062 0.19043 10.0308 0.19043ZM2.83678 9.92346C2.83678 5.95034 6.05764 2.72948 10.0308 2.72948C14.0039 2.72948 17.2247 5.95034 17.2247 9.92346C17.2247 13.8966 14.0039 17.1174 10.0308 17.1174C6.05764 17.1174 2.83678 13.8966 2.83678 9.92346Z" fill="#FF4848" />
          </svg>
        </div>
      </div>

    );
  };


  const { fields, append, remove } = useFieldArray({
    name: "Slots",
    control,
  });

  const handleAddSlots = (day) => {
    append({ day: day.day, slot: [{ fromTime: "", toTime: "" }] });
  };

  const handleRemoveSlot = (id) => {
    const index = fields.findIndex((field) => field.id === id);
    if (index !== -1) {
      remove(index);
    }
  };

  const days = [
    { day: "Monday", handleSwitchChange, switchState, timeArrya:{fromTimeSlot:timelist,toTimeSlot:timelist}, handleAddSlots },
    { day: "Tuesday", handleSwitchChange, switchState, timeArrya:{fromTimeSlot:timelist,toTimeSlot:timelist}, handleAddSlots },
    { day: "Wednesday", handleSwitchChange, switchState, timeArrya:{fromTimeSlot:timelist,toTimeSlot:timelist}, handleAddSlots },
    { day: "Thursday", handleSwitchChange, switchState, timeArrya:{fromTimeSlot:timelist,toTimeSlot:timelist}, handleAddSlots },
    { day: "Friday", handleSwitchChange, switchState, timeArrya:{fromTimeSlot:timelist,toTimeSlot:timelist}, handleAddSlots },
    { day: "Saturday", handleSwitchChange, switchState, timeArrya:{fromTimeSlot:timelist,toTimeSlot:timelist}, handleAddSlots },
    { day: "Sunday", handleSwitchChange, switchState, timeArrya:{fromTimeSlot:timelist,toTimeSlot:timelist}, handleAddSlots }
  ];
  
  const returnTimes = (day, index) => {
    const TimeDetails = watch(`TimeDetails.${day.day}`);
    
    if (!TimeDetails || !TimeDetails.Slots || !Array.isArray(TimeDetails.Slots)) {
      
        return false;
    }
    
    const hasSlotWithTime = TimeDetails.Slots.some(slot => slot.slot && (slot.slot.fromTime === '05:45' || slot.slot.toTime === '05:45'));
    return hasSlotWithTime;
}


let dsdsd=false

  return (
    <>
      <div className="border border-1 border-dark rounded-4">
        {days.map((day, index) => (
          <div
            key={index}
            className="container d-flex align-items-center justify-content-center p-2"
          >
            <div className="row p-0.5 w-100 d-flex align-items-center p-2">
              <LabelHeadingComponet
                lable={true}
                headingDay={day.day}
                lg={2}
                xl={2}
                md={6}
                sm={6}
                xs={6}
              />
              <div className="col-lg-2  col-xl-2 col-md-2  col-xs-6 col-sm-6">
                {day.switchState[day.day] ? (
                  <svg
                    onClick={() =>
                      day.handleSwitchChange(day.day, !day.switchState[day.day])
                    }
                    id="toggleIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="24"
                    viewBox="0 0 44 24"
                    fill="none"
                  >
                    <path
                      d="M0 12C0 5.37258 5.37258 0 12 0H32C38.6274 0 44 5.37258 44 12C44 18.6274 38.6274 24 32 24H12C5.37258 24 0 18.6274 0 12Z"
                      fill="#56C568"
                    />
                    <circle cx="32" cy="12" r="10" fill="white" />
                  </svg>
                ) : (
                  <svg
                    onClick={() =>
                      day.handleSwitchChange(day.day, !day.switchState[day.day])
                    }
                    id="toggleIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="24"
                    viewBox="0 0 44 24"
                    fill="none"
                  >
                    <path
                      opacity="1"
                      d="M0 12C0 5.37258 5.37258 0 12 0H32C38.6274 0 44 5.37258 44 12C44 18.6274 38.6274 24 32 24H12C5.37258 24 0 18.6274 0 12Z"
                      fill="#525252"
                    />
                    <circle opacity="1" cx="12" cy="12" r="10" fill="white" />
                  </svg>
                )}
              </div>
              {renderTimeSelector(day, "fromTime", 0)}

              <div className="col-lg-1 col-md-1 col-xs-1 col-sm-1 text-center">
                <span>To</span>
              </div>
              {renderTimeSelector(day, "toTime", 0)}

              <div className="col-lg-1 col-md-1 col-xs-1 col-sm-1">
                <svg
                  onClick={() => {
                    
                    dsdsd=returnTimes(day,index);
                   
                    if (day.switchState[day.day] && !dsdsd) {
                      day.handleAddSlots(day);
                    }
                  }}
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    cursor: day.switchState[day.day] || returnTimes(day,index) ? "pointer" : "not-allowed",
                    opacity: day.switchState[day.day] || returnTimes(day,index) ? "1" : "0.5",
                    // disabled:day.switchState[day.day] ? false : true
                    pointerEvents: day.switchState[day.day]|| returnTimes(day,index) ? "auto" : "not-allowed"
                  }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM12 7C12 6.44772 11.5523 6 11 6C10.4477 6 10 6.44772 10 7V10H7C6.44772 10 6 10.4477 6 11C6 11.5523 6.44772 12 7 12H10V15C10 15.5523 10.4477 16 11 16C11.5523 16 12 15.5523 12 15V12H15C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10H12V7Z"
                    fill="#3A3A3A"
                  />
                </svg>
              </div>
              {fields
                .filter((slot) => slot.day === day.day)
                .map((slot, index) => (
                  <div
                    key={slot.id}
                  >
                    {returnTimeSlots(day, slot, index)}{" "}

                  </div>
                ))}
            </div>

          </div>
        ))}
      </div>
    </>
  );
};

export default TimesDetails;
