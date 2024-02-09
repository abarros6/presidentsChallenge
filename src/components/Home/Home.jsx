import React, { useEffect } from 'react'
import './Home.css'

import { NavLink, Route } from 'react-router-dom'

const Home = () => {

  function toQueue(e) {
    e.preventDefault();
  }
  return (
    <div className='home_background'>
      <div className='home_main_container'>
        <div className='home_left_container'>
          <h1 className='home_main_header'>Welcome to Triage</h1>
          <form onSubmit={toQueue}>
          <NavLink style={{"text-decoration": "none"}} className="nav_link" to="/Queue">
            <button>Enter the queue now!</button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home