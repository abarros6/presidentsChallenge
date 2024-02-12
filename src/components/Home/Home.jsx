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
      <div className="header">
        <h1>Welcome to Triage Queue</h1>
        <p className="placeholder-text">Get in line before you arrive at the hospital by just answering a few questions, and wait at home until a phsyician can assess you.
        If you are experiencing an urgent medical problem go directly to an emergency room. <br  />
        By using this service you acknowledge that COMPANY NAME is not responsible for any healthcare you may or may not receive.</p>
      </div>
      <div className="queue-form">
        <button onClick={handleClick}>Join Queue</button>
      </div>
    </div>
  );
};

// const Home = () => {

//   function toQueue(e) {
//     e.preventDefault();
//   }
//   return (
//     <div className='home_background'>
//       <div className='home_main_container'>
//         <div className='home_left_container'>
//           <h1 className='home_main_header'>Welcome to Triage</h1>
//           <form onSubmit={toQueue}>
//           <NavLink style={{"text-decoration": "none"}} className="nav_link" to="/Queue">
//             <button>Enter the queue now!</button>
//             </NavLink>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

export default Home