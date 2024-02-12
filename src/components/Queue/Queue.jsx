import React, { useState, useEffect } from 'react'
import './Queue.css'

const Queue = () => {
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

export default Queue;