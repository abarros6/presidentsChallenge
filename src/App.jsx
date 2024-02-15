
import React, {useState} from 'react';

import {Route, Routes, Navigate} from 'react-router-dom'

import Home from './components/Home/Home';
import Queue from './components/Queue/Queue';
import About from './components/About/About';
import Form from './components/Form/Form';


function App() {
  const [isFormComplete, setIsFormComplete] = useState(false)

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home"/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route 
          path='/Queue' 
          element={<Queue isFormComplete={isFormComplete} setIsFormComplete={setIsFormComplete}/>}>
        </Route>
        <Route path='/About' element={<About/>}></Route>
        <Route 
          path='/Form' 
          element={<Form isFormComplete={isFormComplete} setIsFormComplete={setIsFormComplete}/>}>
        </Route>
    </Routes>
  );
}

export default App;
