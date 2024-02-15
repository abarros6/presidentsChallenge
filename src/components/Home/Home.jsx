import React, { useEffect } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Form');
  };

  return (
    <div className="homepage-container">
      <h1 className='home_main_header'>Welcome to MediQueue</h1>
      <div className='description_container'>
        <pre className='description'>
          <p>Get in line before you arrive at the hospital by just answering a few questions, and wait at home until a phsyician can assess you.
          If you are experiencing an urgent medical problem go directly to an emergency room. </p>
          <p>By using this service you acknowledge that COMPANY NAME is not responsible for any healthcare you may or may not receive.</p>
        </pre>
      </div>
      
      <div className="queue-form">
        <button onClick={handleClick}>Join Queue</button>
      </div>
    </div>
  );
};

export default Home