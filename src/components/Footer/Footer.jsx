import React from 'react'
import './Footer.css'

const Footer = () => {
    return(
        <div className='footer_background'>
            <p className='footer_text'>Created by: <a target="_blank" href='https://www.linkedin.com/in/anthony-barros-b142a1181/'>Anthony Barros </a>, Curtis Floras, and <a target="_blank" href='https://www.linkedin.com/in/ethan-miranda-498a79225/'>Ethan Miranda </a></p>
            <a className='footer_item' target="_blank" href = 'https://github.com/abarros6/presidentsChallenge'>Github</a>
        </div>
    )
}

export default Footer