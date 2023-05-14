import React, { useContext } from 'react';
import "./Navbar.css";
import { Link} from "react-router-dom";
import { Authcontext } from '../contextProvider';
import user from '../components/images/user.png'


export const Navbar = () => {
    const {currentUser} = useContext(Authcontext)
    return (
        <>
            <header className="header">

                <Link to="#" className="logo"> <span>BE</span>FIT </Link>

                <div id="menu-btn" className="fas fa-bars"></div>

                <nav className="navbar">
                    
                    <Link to="/">Home</Link>
                    <Link to="/Packages">Pricing</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/plans">Your-Plans</Link>

                    {/* <img src={currentUser.photoURL}></img> */}
                    {/* The above img tag must contain the profile photo that the user uploaded while they logged in */}

                    
                </nav>

            </header>
        </>
    )
}
