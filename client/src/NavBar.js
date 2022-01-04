import React from "react";
import {Link} from "react-router-dom"

function NavBar() {



    return (
        <nav className = "navBar">
            <Link class="hello" to="/Items">Items</Link>
            <Link class="hello" to="/About">About</Link>
            <Link class="hello" to="/Purchases">Purchases</Link>
        </nav>
    );
}

export default NavBar;