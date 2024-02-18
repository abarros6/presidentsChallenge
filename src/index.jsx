import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/*" element={<App />}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
