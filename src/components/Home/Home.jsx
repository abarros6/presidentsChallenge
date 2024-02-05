import React, { useEffect } from 'react'
import './Home.css'

import { NavLink } from 'react-router-dom'

const Home = () => {

  return (
    <div className='home_background'>
      <div className='home_main_container'>
        <div className='home_left_container'>
          <h1 className='home_main_header'>Welcome to Triage</h1>
          <h2 className='home_sub_header'>Enter the queue now!</h2>
        </div>
      </div>
    </div>
  )
}

export default Home