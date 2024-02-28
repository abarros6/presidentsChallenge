import React from 'react'
import './Footer.scss'

const Footer = () => {
    return(
        <div id = "footer" className='footer_background'>
            <p className='footer_text'>President's Challenge: <a target="_blank" href='https://www.linkedin.com/in/anthony-barros-b142a1181/'>Anthony Barros </a>, <a target="_blank" href='https://www.linkedin.com/in/curtis-floras-661842208/'>Curtis Floras </a>, and <a target="_blank" href='https://www.linkedin.com/in/ethan-miranda-498a79225/'>Ethan Miranda </a></p>
            <a className='footer_item' target="_blank" href = 'https://github.com/abarros6/presidentsChallenge'>Github</a>
        </div>
    )
}

export default Footer