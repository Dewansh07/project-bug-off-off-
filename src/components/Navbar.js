import React from 'react';
import "./Navbar.css";
import { Link} from "react-router-dom";


export const Navbar = () => {
    return (
        <>
            <header className="header">

                <Link to="#" className="logo"> <span>BE</span>FIT </Link>

                <div id="menu-btn" className="fas fa-bars"></div>

                <nav className="navbar">
                    
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/features">Features</Link>
                    <Link to="/Packages">Pricing</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/plans">Your-Plans</Link>
                </nav>

            </header>
        </>
    )
}
