import React, { useState } from 'react';
import './nav.css';
import { FaHeartbeat, FaStream } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { BiGridAlt, BiStats, BiCog, BiLogOut } from "react-icons/bi";

function NavBar() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [indiTop, setIndiTop] = useState('14%');

    const handleClick = (index) => {
        setActiveIndex(index);
        let topPosition;
        
    };

    return (
        <>
            <nav className='navT'>
                <ul>
                    <li className="burger"><a href="#"><FaStream /></a></li>
                    <li className={`${activeIndex === 1 ? 'Active' : ''}`} onClick={() => handleClick(1)}><a href="#"><BiGridAlt /></a></li>
                    <li className={activeIndex === 2 ? 'Active' : ''} onClick={() => handleClick(2)}><a href="#"><BiStats /></a></li>
                    <li className={activeIndex === 3 ? 'Active' : ''} onClick={() => handleClick(3)}><a href="#"><FaHeartbeat /></a></li>
                    <li className={activeIndex === 4 ? 'Active' : ''} onClick={() => handleClick(4)}><a href="#"><FaCalendar /></a></li>
                    <div className="indi" style={{ top: indiTop }}></div>
                </ul>
                <div className="ambany">
                    <a href="#"><BiCog /></a>
                    <a href="#"><BiLogOut /></a>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
