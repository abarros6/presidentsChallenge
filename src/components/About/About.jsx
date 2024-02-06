import React,{useState, useEffect }from 'react'
import './About.css'



function About() {

    const [About_text, set_About_text] = useState("")

  return (
    <div className='about_main_container'>
        <h1 className='about_main_header'>
            About
        </h1>
        <h2 className='about_main_subheader'>
            Our Mission
        </h2>

        
        
        <div className='about_subcontainer1'>
            <pre className='about_description'>
                {About_text}
            </pre>
        </div>
        <h2 className='about_main_subheader'>
            
        </h2>

    </div>
  )
}




export default About