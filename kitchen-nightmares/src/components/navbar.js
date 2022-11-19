import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function NavBar() {
    return (
        <div class="topnav">
            <NavLink className="link" to="/" end>Home</NavLink>
            <NavLink className="link" to="/about">About</NavLink>
            <NavLink className="link" to="/awards">Awards</NavLink>
            <NavLink className="link" to="/gallery">Gallery</NavLink>
        </div>
    );
}