import React, { useEffect } from 'react'
import './Home.scss'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Form');
  };

  return (
    <div className="main-container">
      <h1 className='main-header'>Welcome to MediQueue</h1>
      <div className='text-container'>
        <pre className='text-format'>
          <p>Get in line before you arrive at the hospital by just answering a few questions, and wait at home until a phsyician can assess you.
          If you are experiencing an urgent medical problem go directly to an emergency room. </p>
          <p>By using this service you acknowledge that COMPANY NAME is not responsible for any healthcare you may or may not receive.</p>
          <p>Already in the queue? just type in your code to view your position.</p>
        </pre>
      </div>
      <button onClick={handleClick}>Join Queue</button>
    </div>
  );
};

export default Home