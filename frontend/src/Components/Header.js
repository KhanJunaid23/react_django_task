import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{display:"-webkit-inline-box"}}>
                    <li className="nav-item" style={{margin:"0 15px"}}>
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item" style={{margin:"0 15px"}}>
                        <Link className="nav-link active" to="/shop">Shop</Link>
                    </li>
                    <li className="nav-item" style={{margin:"0 15px"}}>
                        <Link className="nav-link active" to="/profile">Profile</Link>
                    </li>
                </ul>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
        </React.Fragment>
    );
}

export default Header;