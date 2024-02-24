import React from "react";
import "./Popup.scss";

export default function Popup({popupButtonOnClick, togglePopup, popup, setPopup, popupTitle, popupText, warning}) {
  return (
    <>
      {popup && (
        <div className="popup">
          <div className="overlay"></div>
          <div className="popup-content">
            <h2>{popupTitle}</h2>
            {!warning && (
            <p>
              {popupText}
            </p>
            )}
            <button className="popup-button" onClick={togglePopup}>
              Cancel
            </button>
            {!warning && (
            <button className="popup-button" onClick={popupButtonOnClick}>
              Confirm
            </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}