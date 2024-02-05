import './App.css';
import React, {useState} from 'react';

import {Route, Routes, Navigate} from 'react-router-dom'

import Home from './components/Home/Home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}></Route>
        <Route path='/home' element={<Home/>}></Route>

    </Routes>
  );
}

export default App;
