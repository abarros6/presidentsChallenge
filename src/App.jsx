
import React, {useState} from 'react';

import {Route, Routes, Navigate} from 'react-router-dom'

import Home from './components/Home/Home';
import Queue from './components/Queue/Queue';
import About from './components/About/About';
import Form from './components/Form/Form';


function App() {
  const [isFormComplete, setIsFormComplete] = useState(false)
  //init to 1 outside of valid range to ensure we dont default to an existing id, avoid collisions
  const [code, setCode] = useState(10000)

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home"/>}></Route>
      <Route path='/About' element={<About/>}></Route>
        <Route 
          path='/Home' 
          element={
            <Home 
              isFormComplete={isFormComplete} 
              setIsFormComplete={setIsFormComplete}
              code={code}
              setCode={setCode}
            />
          }
        ></Route>
        <Route 
          path='/Queue' 
          element={
            <Queue 
              isFormComplete={isFormComplete} 
              setIsFormComplete={setIsFormComplete}
              code={code}
              setCode={setCode}
            />
          }
        ></Route>
        <Route 
          path='/Form' 
          element={
            <Form 
              isFormComplete={isFormComplete} 
              setIsFormComplete={setIsFormComplete}
              code={code}
              setCode={setCode}
            />
          }
        ></Route>
    </Routes>
  );
}

export default App;
