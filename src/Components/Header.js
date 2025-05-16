import './CSS/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


export default function Header(){

    const [menuOpen,setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev); //för att toggla
    };

    return (
        <div className='Header'>
            <h1> <img className='logo' src='/images/reactlogo.png' alt='React'/>Assignment 1 </h1>

                  <FontAwesomeIcon icon={faBars} className='hamburger' onClick={toggleMenu}/>

                    <div>
            <ul className={`Navbar ${menuOpen ? 'show' : ''}`}>
                <li>Home</li>
                   <li>About</li>
                      <li>Contact</li>
            </ul>
        </div>

        </div>
    )
}