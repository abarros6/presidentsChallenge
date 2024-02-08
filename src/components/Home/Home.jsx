import React, { useEffect } from 'react'
import './Home.css'

import { NavLink, Route } from 'react-router-dom'

const Home = () => {

  function toQueue(e) {
    e.preventDefault();
    window.location.replace("/Queue");
  }
  return (
    <div className='home_background'>
      <div className='home_main_container'>
        <div className='home_left_container'>
          <h1 className='home_main_header'>Welcome to Triage</h1>
          <form onSubmit={toQueue}>
            <button>Enter the queue now!</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home