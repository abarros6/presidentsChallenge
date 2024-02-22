import React, { useState, useEffect } from 'react'
import './Home.scss'
import { useNavigate } from 'react-router-dom';


const Home = ({code, setCode, isFormComplete, setIsFormComplete}) => {
  const navigate = useNavigate();
  const [sessionToken, setSessionToken] = useState(0) 

  async function checkId(data) {
    const res = await fetch('/api/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data
      })
    })
      return res.json()
  }

  const handleSubmit = async e => {
    e.preventDefault();
    if (isFormComplete) {
      alert('you are already in the queue')
    } else {
      checkId(sessionToken).then((data) => {
        if (data.success) {
            setIsFormComplete(true)
            setCode(sessionToken)
            navigate('/Queue');
        } else {
          alert('invalid code')
        }
      })
    }
  };

  const handleChange = (e) => {
    setSessionToken(e.target.value);
  }

  const handleClick = () => {
    if(isFormComplete) {
      alert('you are already in the queue')
    } else {
      navigate('/Form');
    }
  };

  return (
    <div className="main-container">
      <h1 className='main-header'>Welcome to MediQueue</h1>
      <div className='text-container'>
        <pre className='text-format'>
          <p>Get in line before you arrive at the hospital by just answering a few questions, and wait at home until a phsyician can assess you.
          If you are experiencing an urgent medical problem go directly to an emergency room. </p>
          <p>By using this service you acknowledge that COMPANY NAME is not responsible for any healthcare you may or may not receive.</p>
        </pre>
        <button onClick={handleClick}>Join Queue</button> 
      </div>
      <div className='card'>
        <h2>If you are already in the queue, enter your id</h2>
        <input
          className='code-input'
          type="text" 
          pattern="[0-9]*"
          name="id"
          value={sessionToken}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Home