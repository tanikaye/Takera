import React, { useState } from "react";
import {Link} from "react-router-dom"

function NavBar({ setUser, user }) {

  const [shadow, setShadow] = useState(false);
  

   

  function handleLogoutClick() {
    console.log("logged out", user)
    fetch("/users", {
        method: "DELETE"
    })
        .then(r=>r.json())
        .then(setUser(null));
}
    function weHidin(){
        setShadow.setState({shadow:true})
    }
    return (
        <nav className = "navBar">
            <Link className="hello" to="/ListingContainer">Items</Link>
            <Link className="hello" to="/About">About</Link>
            <Link className="hello" to="/PurContainer">Purchases</Link>
            <Link className="hello" to="/Login">{  shadow ? "Login":"" }</Link>
           <Link className="hello" to="/SignUp">{  shadow ? "SignUp":"" }</Link>
            <button onClick={handleLogoutClick}>
            <Link className="hello" to="/Logout" >Logout</Link>
            </button>


        </nav>
    );
}

export default NavBar;

