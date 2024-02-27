import React, {useEffect, useState} from 'react'
import './Navbar.scss'
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
                    
                    <section class="p-menu1">
                        <nav id="navbar" class="navigation" role="navigation">
                            <input id="toggle1" type="checkbox" />
                            <label class="hamburger1" for="toggle1">
                            <div class="top"></div>
                            <div class="meat"></div>
                            <div class="bottom"></div>
                            </label>
                        
                            <nav class="menu1">
                                <NavLink style={{"text-decoration": "none"}} className="link1" to="/">Home</NavLink>
                                <NavLink style={{"text-decoration": "none"}} className="link1" to="/Queue">Queue</NavLink>
                                <NavLink style={{"text-decoration": "none"}} className="link1" to="/About">About</NavLink>
                            </nav>
                        </nav>
                    </section>
                    
                    <li >
                        <h1 className='title'>MediQueue</h1>
                    </li> 
                    <li className='navbar_image'>
                        <NavLink style={{"text-decoration": "none"}} className="nav_link" to="/">
                            <img src={Logo} alt="Logo" style={{width: "6vh", height: "auto"}} className='logo'/>
                        </NavLink>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Navbar