import React, { useState, useEffect } from 'react'
import './Home.scss'
import { useNavigate } from 'react-router-dom';
import Morrisette from '../../Assets/Morrisette.svg'
import Western from '../../Assets/Western.svg'
import Waiting from '../../Assets/Waiting.jpg'


const Home = ({code, setCode, isFormComplete, setIsFormComplete}) => {
  const navigate = useNavigate();
  const [sessionToken, setSessionToken] = useState('') 

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
    <div style={{"rowGap": "3vh"}}className="main-container">
      {/* <h1 className='main-header'>MediQueue</h1> */}
      <img src={Waiting} alt="waiting" className={'morrisette'} style={{width: "50%", height: "auto"}} />
      <div className='flex-row'>
        <div className='text-container'>
          <pre className='text-format'>
            <p>Get in line before you arrive at the hospital by just answering a few questions, and wait at home until a phsyician can assess you.
            If you are experiencing an urgent medical problem go directly to an emergency room or call 911. </p>
          </pre>
        </div>
      </div>
      <button style={{"fontSize" : "3em"}} onClick={handleClick}>Join Queue</button> 
      <div className={"code-container"}>
        <h2>Already have a Queue Code?</h2>
        <input
          className='code-input'
          type="text" 
          pattern="[0-9]*"
          name="id"
          value={sessionToken}
          onChange={handleChange}
        />
        <button style={{"width":"100%"}}onClick={handleSubmit}>Submit</button>
      </div>
      {/* <img src={Morrisette} alt="Morrisette" style={{width: "50vh", height: "auto"}} className='morrisette'/> */}
      {/* <img src={Western} alt="Western" style={{width: "50vh", height: "auto"}} className='morrisette'/> */}
    </div>
  );
};

export default Home