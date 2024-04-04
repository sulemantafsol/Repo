import React from "react";
import { Link } from "react-router-dom";
import { SiteLogo } from "../assets/pathConstant";

const Navigation = () => {
    return(
        <header className="main__header">
            <div className="container">
                <nav className="navbar">
                    <Link to="/"><img className="site-logo" src={ SiteLogo } alt="" /></Link>
                    <ul>
                        <Link to='login' className="btn">Login</Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navigation