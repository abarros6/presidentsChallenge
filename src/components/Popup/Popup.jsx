import React, { useState } from "react";
import "./Popup.css";

export default function Popup({popupButtonOnClick, togglePopup, popup, setPopup, popupTitle, popupText}) {



  return (
    <>

      {popup && (
        <div className="popup">
          <div className="overlay"></div>
          <div className="popup-content">
            <h2>{popupTitle}</h2>
            <p>
              {popupText}
            </p>
            <button onClick={togglePopup}>
              Cancel
            </button>
            <button onClick={popupButtonOnClick}>
              Confirm
            </button>
          </div>
        </div>
      )}
    </>
  );
}