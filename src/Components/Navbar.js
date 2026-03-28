import React from 'react';
import Logo from '../images/Logo.jpg';
import '../Components/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div id="navbar"> 
            <nav>
                <img src={Logo} alt="Logo" className="logo" onClick={handleClick}/>
                <ul className='middle-ul'>
                    <li><Link to="/exercises" className="ref-exercises">Search Exercises</Link></li>
                    <li><Link to="/food" className='ref-food'>Search Foods</Link></li>
                </ul>
                <ul className='login'>
                    <li><a className='icon'><FontAwesomeIcon icon={faUser} style={{color: "#0c1416",fontSize: "2rem", paddingBottom:"10px"}} />Login</a></li>
                </ul>
            </nav>
        </div>
    );
};

function handleClick() {
    window.location.href = '/';
}



export default Navbar;