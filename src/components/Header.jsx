import React from "react";
import { Link } from "react-router-dom";
import './../assets/styles/header.css'

class Header extends React.Component{
    render(){
        return (
            <nav>
                <div className="nav-container">
                    <Link to="/" style={{ textDecoration: 'none'}}>Home</Link> 
                    <Link to="/about" style={{ textDecoration: 'none'}}>About</Link>
                    <Link to="/experience" style={{ textDecoration: 'none'}}>Experience</Link>
                    <Link to="/skills" style={{ textDecoration: 'none'}}>Skills</Link>
                    <Link to="/interest" style={{ textDecoration: 'none'}}>Interest</Link>
                    <Link to="/awards" style={{ textDecoration: 'none'}}>Awards</Link>
                </div>
            </nav>
        )
    }
}

export default Header;