import React, {useEffect, useState} from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../Assets/Logo.svg'

const Navbar = () => {

    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setIsHidden(currentScrollPos > 50 && currentScrollPos > lastScrollPos);
            lastScrollPos = currentScrollPos;
        };

        let lastScrollPos = window.pageY;
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className={`nav_background ${isHidden ? 'nav_hidden' : ''}`}>
            <div className='nav_container'>
                <ul className='navbar_list'>
                    {/* <li className='navbar_list_items'>
                        <NavLink style={{"text-decoration": "none"}} className="nav_link" to="/">Home</NavLink>
                    </li> */}
                    <li className='navbar_list_items'>
                        <NavLink style={{"text-decoration": "none"}} className="nav_link" to="/Form">Form</NavLink>
                    </li>
                    <li className='navbar_list_items'>
                        <NavLink style={{"text-decoration": "none"}} className="nav_link" to="/Queue">Queue</NavLink>
                    </li>
                    <li className='navbar_list_items'>
                        <NavLink style={{"text-decoration": "none"}} className="nav_link" to="/About">About</NavLink>
                    </li>
                    <li className='navbar_image'>
                        <NavLink style={{"text-decoration": "none"}} className="nav_link" to="/">
                            <img src={Logo} alt="Logo" style={{width: "100px", height: "auto"}} className='logo'/>
                        </NavLink>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Navbar