import React, { useState } from "react";

const ButtonGroup = ({ buttons,register,errors}) => {
  return (
    <div
      className="btn-group p-1"
      role="group"
      aria-label="Basic mixed styles example"
    >
      {buttons.map((button, index) => (
        <button
          key={button.id+index}
          type="button"
          className={`btn btn-${button.color} m-0 pt-0 pl-0.5 pr-0.5 pb-0 rounded-0`}
          onClick={button.onClick}
        >
          {button.fileUplodeBtn ? (
            <label
              htmlFor={`file-upload-${button.id+index}`}
            >
              <i
                className={`bi bi-${button.icon}`}
                style={{ fontSize: "24px", color: "white"}}
              >
                <input
                  type="file"
                  id={`file-upload-${button.id+index}`}
                  style={{ display: "none"}}
                  onChange={button.onClick}
                  value={Object.keys(button.selectedFile).length > 0 ? button.selectedFile?.name :''}
                />
              </i>
            </label>
          ) : (
            <i
              className={`bi bi-${button.icon}`}
              style={{ fontSize: "24px", color: "white" }}
            ></i>
          )}
       
        </button>
      ))}
      
    </div>
  );
};

export default ButtonGroup;
