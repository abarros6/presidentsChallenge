import React, { useEffect, useState } from 'react'
import './Queue.scss'
import Popup from '../Popup/Popup';
import { useNavigate } from 'react-router-dom';
import FormCat from '../../Assets/FormCat.png'

const Card = ({ title, height = '400px', width = '400px', codeData, position, positionData, locationData, symptoms }) => {
  const formattedPosition = position ? `Position: ${position + 1}` : null;

  return (
    <div className="card align-center" style={{ height: `${height}`, width: `${width}` }}>
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{positionData}</p>
      <p className="card-content">{locationData}</p>
      <p className="card-position">{codeData}</p>
      {formattedPosition && <p className="card-position">{formattedPosition}</p>}
      <ul>
        {symptoms?.map((symptom, index) => (
          <li key={index}>{symptom}</li>
        ))}
      </ul>
    </div>
  );
};

const Queue = ({code, setCode, isFormComplete, setIsFormComplete}) => {
  const navigate = useNavigate();
  const [patientList, setPatientList] = useState({});
  const [patient, setPatient] = useState({})

  const [position, setPosition] = useState(0);
  const [popup, setPopup] = useState(false)

  const positionText = `There are ${position} people ahead of you.`
  const locationText = `You will be going to University Hospital`
  const codeText =`Re-entry code: ${code}`

  let initPosition = () => {
    let totalPatients = Object.keys(patientList).length
    //use the code to determine the queue position of the current user
    for (let i = 0; i < totalPatients; i++) {
      if (patientList[i.toString()].id == code) {
        setPatient(patientList[i.toString()])
        return i
      }
    }
  }
  
  useEffect(() => {
    getQueueOnClick()
  }, [patientList])

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
        setPosition(initPosition())
      }
    })
  };


  const refreshQueue = () => {
    getQueueOnClick()
    console.log(patient)
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
              codeData={codeText}
              symptoms={patient.symptoms}
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
          <hr></hr>
        </div>
      }
    </>
  );
};

export default Queue;
