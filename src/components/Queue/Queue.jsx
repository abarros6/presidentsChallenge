import React, { useState } from 'react'
import './Queue.scss'
import Popup from '../Popup/Popup';
import { useNavigate } from 'react-router-dom';
import FormCat from '../../Assets/FormCat.png'

const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};

const Card = ({ title, height = 400, width = 400, data, time, position }) => {
  const formattedTime = formatTime(time);
  const formattedPosition = position ? `Position: ${position}` : null;

  return (
    <div className="card align-center" style={{ height: `${height}px`, width: `${width}px` }}>
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{data}</p>
      {time && <p className="card-time">{formattedTime}</p>}
      {formattedPosition && <p className="card-position">{formattedPosition}</p>}
    </div>
  );
};

const Queue = ({isFormComplete, setIsFormComplete}) => {
  const navigate = useNavigate();

  const [position, setPosition] = useState(12);
  const [time, setTime] = useState(30);
  const [popup, setPopup] = useState(false)

  const timeText = `Roughly ${time} minutes before your turn. Please try to arrive around 15 minutes early`
  const positionText = `There are ${position -1} people ahead of you.`
  const incompleteText = `Please return to the home page to complete the form. The form must be complete to enter the queue`

  const refreshQueue = () => {
    setTime(time - 2)
    setPosition(position-1)
  }

  const togglePopup = () => {
    setPopup(!popup);
  };

  const popupButtonOnClick = () => {
    //handle logic of removing user from actual queue data, then set form data and redirect
    setIsFormComplete(false)
    navigate('/');
  }

  return (
    <>
      {
        isFormComplete && 
        <div className="main-container">
          <h1 className='main-header'>Queue</h1>
          <div className='card-container'>
            <Card 
              title = {"Time"}
              data = {timeText}
              time = {time}
            />
            <Card 
              title = {"Position"}
              data = {positionText}
              position = {position}
            />
          </div>
          <div className='queue-button-container'>
            <button className="queue-button" onClick={togglePopup}>Exit Queue</button>
            <button className="queue-button" onClick={refreshQueue}>Refresh Queue</button>
          </div>
        </div>
      }
      {popup &&  
        <Popup
          popupButtonOnClick = {popupButtonOnClick}
          togglePopup = {togglePopup}
          popup={popup}
          setPopup={setPopup}
          popupTitle={"Are you sure you want to exit the queue?"}
          popupText={"Exiting the queue will result in the loss of your position. Your spot will no longer be held and you will have resubmit the form."}
        />
      }
      {
        !isFormComplete &&
        <div className='main-container'>
          <h1 className='main-header'>You need to complete the form.</h1>
          <hr></hr>
          <img src={FormCat}/>
          <Card 
            title = {"Form Incomplete"}
            data = {incompleteText}
            height={200}
            width ={800}
          />
        </div>
      }
    </>
  );
};

export default Queue;
