import React, { useContext } from 'react';
import "./Navbar.css";
import { Link} from "react-router-dom";
import { Authcontext } from '../contextProvider';
import user from '../components/images/user.png'
import { Button } from 'react-bootstrap';


export const Navbar = () => {
    const {currentUser} = useContext(Authcontext)
    return (
        <>
            <header className="header">

                <Link to="#" className="logo"> <span>BE</span>FIT </Link>

                <div id="menu-btn" className="fas fa-bars"></div>
                <input className='search' placeholder='Search'></input>
                <input className='searchn_btn' type='button' value='🔍'></input>

                <nav className="navbar">
                    
                    <Link to="/">Home</Link>
                    <Link to="/Products">Products</Link>
                    <Link to="/support">Support</Link>
                    <Link to="/cart">Cart</Link>

                    {/* <img src={currentUser.photoURL}></img> */}
                    {/* The above img tag must contain the profile photo that the user uploaded while they logged in */}

                    
                </nav>

            </header>
        </>
    )
}
