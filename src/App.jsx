import './App.css';
import React, {useState} from 'react';

import {Route, Routes, Navigate} from 'react-router-dom'

import Home from './components/Home/Home';
import Queue from './components/Queue/Queue';
import About from './components/About/About';
import LoginSignup from './components/LoginSignup/LoginSignup';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home"/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Queue' element={<Queue/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/LoginSignup' element={<LoginSignup/>}></Route>

    </Routes>
  );
}

export default App;
