import React from "react";
import { Link } from "react-router-dom";

import './style.css'

function Header(){
    return(
        <header>
            <a className='logo'>
                <img src='./assets/dente.png'/>
                <span>Dentes Saudaveis</span>
            </a>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header