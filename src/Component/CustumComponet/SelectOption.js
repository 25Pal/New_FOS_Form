import React from "react";

const SelectOption = ({
  options,
  idName,
  lableName,
  lg,
  md,
  xs,
  sm,
  register,
  dynamicKey,
  errors,
  form,
  required,
  time,
  disabled
}) => {

  return (
    <div className={`col-lg-${lg ? lg : 4} col-${md ? md : 6} col-${xs ? xs : 12} col-${sm ? sm : 12} ${!time  ? 'select-option' : 'select-option-time'}`}>
      {
        !time && (

          <label htmlFor={idName}>{lableName} {required ? <span style={{color:'red'}}>*</span>:''}</label>
        )
      }
      <select
        {...register(`${dynamicKey ? dynamicKey + "." : ""}${idName}`,{
          required:{
            value: required ? false : false,
            message:`${lableName} Is Required`,
          }
        })}
        className="select-dropdown"
        id={idName}
        disabled={disabled ? disabled:false }
      >
        <option value="">{`Select ${lableName? lableName:'...' }`}</option>
        {options.map((curOption, index) => {
          return (
            <option key={curOption.name ? curOption.name:curOption} value={curOption.name ? curOption.name:curOption}>
              {curOption.name ? curOption.name:curOption}
            </option>
          );
        })}
      </select>
      <p className="error">{errors[dynamicKey || '']?.[idName]?.message}</p>
    </div>
  );
};

export default SelectOption;
