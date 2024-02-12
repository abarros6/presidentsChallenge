import React, { useState, useEffect } from 'react'
import './Queue.css'

import { NavLink } from 'react-router-dom'

// const Queue = () => {
//     const position = 1;

//   return (
//     <div className=''>
//         <div className='queue_container'>
//             <h1>This is the queue</h1>
//             <br></br>
//             <button>enter the queue</button>
//             <br></br>
//             <button>refresh the queue</button>
//         </div>
//         <div>
//             <p>Your position in the queue is {position}</p>
//         </div>
//     </div>
//   )
// }

// export default Queue

const QueueVisualization = () => {
  const [queue, setQueue] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleEnqueue = () => {
    if (inputValue.trim() !== '') {
      setQueue([...queue, inputValue]);
      setInputValue('');
    }
  };

  const handleDequeue = () => {
    if (queue.length > 0) {
      const updatedQueue = [...queue];
      updatedQueue.shift();
      setQueue(updatedQueue);
    }
  };

  return (
    <div className="queue-container">
      <h2>Queue Visualization</h2>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleEnqueue}>Enqueue</button>
        <button onClick={handleDequeue}>Dequeue</button>
      </div>
      <div>
        <h3>Queue:</h3>
        <ul className="queue-list">
          {queue.map((item, index) => (
            <li key={index} className="queue-item">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QueueVisualization;