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
                        <NavLink style={{"text-decoration": "none"}} className="nav_link" to="/events">Events</NavLink>
                    </li>
                    <li className='navbar_list_items'>
                        <NavLink style={{"text-decoration": "none"}} className="nav_link" to="/cheer/login">Login</NavLink>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Navbar