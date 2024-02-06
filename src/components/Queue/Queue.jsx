import React, { useEffect } from 'react'
import './Queue.css'

import { NavLink } from 'react-router-dom'

const Queue = () => {
    const position = 1;

  return (
    <div className=''>
        <div className='queue_container'>
            <h1>This is the queue</h1>
            <br></br>
            <button>enter the queue</button>
            <br></br>
            <button>refresh the queue</button>
        </div>
        <div>
            <p>Your position in the queue is {position}</p>
        </div>
    </div>
  )
}

export default Queue