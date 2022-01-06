import React from "react";
import {Link} from "react-router-dom"

function NavBar() {

//   function handleLogoutClick() {
//     fetch("/logout", {
//         method: "DELETE"
//     })
//         .then((r) => {
//             if (r.ok) {
//                 setUser(null);
//             }
//         });
// }

    return (
        <nav className = "navBar">
            <Link className="hello" to="/ListingContainer">Items</Link>
            <Link className="hello" to="/About">About</Link>
            <Link className="hello" to="/PurContainer">Purchases</Link>
            <Link className="hello" to="/Login">Login</Link>
            <Link className="hello" to="/SignUp">SignUp</Link>
            <Link className="hello" to="/Logout">Logout</Link>


        </nav>
    );
}

export default NavBar;