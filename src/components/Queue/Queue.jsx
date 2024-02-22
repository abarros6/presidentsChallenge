import React, { useEffect, useState } from 'react'
import './Queue.scss'
import Popup from '../Popup/Popup';
import { useNavigate } from 'react-router-dom';
import FormCat from '../../Assets/FormCat.png'

const Card = ({ title, height = '400px', width = '400px', position, positionData, locationData }) => {
  const formattedPosition = position ? `Position: ${position}` : null;

  return (
    <div className="card align-center" style={{ height: `${height}`, width: `${width}` }}>
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{positionData}</p>
      <p className="card-content">{locationData}</p>
      {formattedPosition && <p className="card-position">{formattedPosition}</p>}
    </div>
  );
};

const Queue = ({code, setCode, isFormComplete, setIsFormComplete}) => {
  const navigate = useNavigate();

  const [position, setPosition] = useState(12);
  const [popup, setPopup] = useState(false)
  const [patientList, setPatientList] = useState({});

  const positionText = `There are ${position -1} people ahead of you.`
  const locationText = `You will be going to University Hospital`
  const incompleteText = `Please return to the home page to complete the form. The form must be complete to enter the queue`

  useEffect(() => {
    //set the queue list on mount to get the info for the current patient
    getQueueOnClick()
  }, [])

  //right now i am just making the person in the first spot leave the queue
  //i need to make the user with the current code leave the queue
  async function leaveQueue(id) {
    const res = await fetch('/api/leave', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id
      })
    })
      return res.json()
  }

  const popupButtonOnClick = async e => {
    e.preventDefault();
    leaveQueue(code).then((data) => {
      if (data.success) {
        setIsFormComplete(false)
        navigate('/');
      }
    })
  };

  async function getQueue() {
    const res = await fetch('/api/patients', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      return res.json()
  }

  const getQueueOnClick = async => {
    getQueue().then((data) => {
      if (data.success) {
        setPatientList(data.patients)
      }
    })
  };


  const refreshQueue = () => {
    getQueueOnClick()
    console.log(patientList)
  }

  const togglePopup = () => {
    setPopup(!popup);
  };

  return (
    <>
      {
        isFormComplete && 
        <div className="main-container">
          <h1 className='main-header'>Queue</h1>
          <div className='card-container'>
            {/* <Card 
              title = {"Position"}
              data = {positionText}
              position = {position}
            /> */}
            <Card
              title = {"Info"}
              positionData = {positionText}
              locationData={locationText}
              position = {position}
              height = {"auto"}
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
