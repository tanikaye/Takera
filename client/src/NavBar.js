import React from "react";
import {Link} from "react-router-dom"

function NavBar() {



    return (
        <nav className = "navBar">
            <Link className="hello" to="/ListingContainer">Items</Link>
            <Link className="hello" to="/About">About</Link>
            <Link className="hello" to="/PurContainer">Purchases</Link>
        </nav>
    );
}

export default NavBar;