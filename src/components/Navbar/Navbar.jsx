import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
    return(
        <div className='nav_background'>
            <div className='nav_container'>
                <ul className='navbar_list'>
                    <li className='navbar_list_items'>
                        <NavLink style={{"text-decoration": "none"}} className="nav_link" to="/">Home</NavLink>
                    </li>
                    <li className='navbar_list_items'>
                        <NavLink style={{"text-decoration": "none"}} className="nav_link" to="/Form">Form</NavLink>
                    </li>
                    <li className='navbar_list_items'>
                        <NavLink style={{"text-decoration": "none"}} className="nav_link" to="/Queue">Queue</NavLink>
                    </li>
                    <li className='navbar_list_items'>
                        <NavLink style={{"text-decoration": "none"}} className="nav_link" to="/About">About</NavLink>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Navbar