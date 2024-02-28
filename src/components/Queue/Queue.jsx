import React, { useEffect, useState } from 'react'
import './Queue.scss'
import Popup from '../Popup/Popup';
import { useNavigate } from 'react-router-dom';
import FormCat from '../../Assets/FormCat.png'

const Card = ({height = 'auto', width = '55vh', codeData, position, symptoms }) => {
  const formattedPosition = position ? `Position: ${position + 1}` : null;

  return (
    <div className="card align-center" style={{ height: `${height}`, width: `${width}` }}>
      <p className="card-content">There are <b>{position}</b> people ahead of you. Please arrive at the hospital in <b>{position*15 + 30}</b> minutes.</p>
      <p className="card-content">You will be going to <b>University Hospital</b></p>
      <p className="card-content" style={{"position": "relative", "right": "15%"}}>Reason for your visit:</p>
      <ul>
        {symptoms?.map((symptom, index) => (
          <li style={{"color": "black"}}key={index}><b>{symptom}</b></li>
        ))}
      </ul>
      <p className="card-position1">{codeData}</p>
      {formattedPosition && <p className="card-position2">{formattedPosition}</p>}
    </div>
  );
};

const Queue = ({code, setCode, isFormComplete, setIsFormComplete}) => {
  const navigate = useNavigate();
  const [patientList, setPatientList] = useState({});
  const [patient, setPatient] = useState({})

  const [position, setPosition] = useState(0);
  const [popup, setPopup] = useState(false)

  const codeText =`Queue Code: ${code}`

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
        isFormComplete && !popup &&
        <div className="main-container">
          <h1 className='main-header'>Patient Info</h1>
          <div className='card-container'>
            {/* <Card 
              title = {"Position"}
              data = {positionText}
              position = {position}
            /> */}
            <Card
              codeData={codeText}
              symptoms={patient.symptoms}
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
          <hr></hr>
        </div>
      }
    </>
  );
};

export default Queue;
