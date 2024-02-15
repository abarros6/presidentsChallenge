import React, { useState, useEffect } from 'react'
import './Queue.css'

const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};

const Card = ({ title, height = 400, width = 400, data, time, position }) => {
  const formattedTime = formatTime(time);
  const formattedPosition = position ? `Position: ${position}` : null;

  return (
    <div className="card" style={{ height: `${height}px`, width: `${width}px` }}>
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{data}</p>
      {time && <p className="card-time">{formattedTime}</p>}
      {formattedPosition && <p className="card-position">{formattedPosition}</p>}
    </div>
  );
};

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
    <div className="queue-page-container">
      <h1 className='main-header'>Queue</h1>
      <div className='card-container'>
        <Card 
          title = {"Time"}
          data = {"Roughly 30 minutes before your turn. Please try to arrive around 15 minutes early"}
          time = {30}
        />
        <Card 
          title = {"Position"}
          data = {"There are 12 people ahead of you."}
          position = {13}
        />
      </div>
      {/* <div className="input-container">
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
      </div> */}
    </div>
  );
};

export default Queue;