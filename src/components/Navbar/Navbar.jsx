import React from 'react'
import "./Navbar.css"
import netflixLogo from "../../assets/images/netflix-logo.webp"
import avatar from '../../assets/images/avatar.png'

function Navbar() {
    return (
        <div className='header'>
            <div className="wrapper">
                <div className="left">
                    <div className="logo-container">
                        <img src={netflixLogo} alt="netflix-logo" className="logo" />
                    </div>
                    <nav className='navbar'>
                        <ul className='navbar-list'>
                            <li className='navbar-item'>Home</li>
                            <li className='navbar-item'>TV Shows</li>
                            <li className='navbar-item'>Movies</li>
                            <li className='navbar-item'>New & Popular</li>
                            <li className='navbar-item'>My List</li>
                        </ul>
                    </nav>
                </div>
                <div className="right">
                    <div className="icons">
                        <i className="fa fa-solid fa-magnifying-glass"></i>
                        <i className="fa fa-regular fa-bell"></i>
                    </div>
                    <div className="avatar-container">
                        <img className='avatar' src={avatar} alt="Avatar" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
