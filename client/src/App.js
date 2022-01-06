import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom"
import Header from "./Header";
import ListingContainer from "./ListingContainer";
import PurContainer from "./PurContainer";
import NavBar from "./NavBar";
import About from "./About";
import Login from "./Login";
import SignUp from "./SignUp";



// import NavBar from "./NavBar";


function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null);

  // const [boughtItem, setBoughtItem] = useState([]);


  // const [page, setPage] = useState("/ListingContainer")

  function handleAddItem (id) {
    // e.preventDefault();
    // setBoughtItem(e.target.value)
    // console.log("here is the bog=ught item", boughtItem)
    fetch("/purchases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_id: id,
        user_id: 1
      }),
    })
      .then((r) => r.json())
      .then((newItem) => onAddItem(newItem))
  }


  function onAddItem(newItem) {
    const updatedItemsArray = [...items, newItem];
    setItems(updatedItemsArray);
    console.log("array of bought items", items)
  }

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then(data => setListings(data));
  }, []);

  function handleLogin(user) {
    setUser(user);
    console.log("this is the user", user)
  }

  // function handlePassword(password) {
  //   setPassword(password);
  // }

  function handleLogout() {
    setUser(null);
  }

  // function sayHello() {
  //   alert('You clicked me!');

  // }


  // function handleRemoveListing(id) {
  //   const newListings = listings.filter((listing) => listing.id !== id);
  //   setListings(newListings);
  // }

  function handleRemoveListing(id) {
    const newItems = items.filter((item) => item.item.id !== id);
    setItems(newItems);
  }

  const displayedListings = listings.filter((listing) =>
    listing.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
          {/* <Header onChangePage={setPage}/> */}

          <NavBar/>
          <Header onSearch={setSearch} />
          <Switch>

        <Route path ="/ListingContainer">
              <ListingContainer
              handleAddItem={handleAddItem}
              items={items}
              onAddItem={onAddItem}
        listings={displayedListings}
        onRemoveListing={handleRemoveListing}/>
        </Route>

        <Route path="/PurContainer">
              <PurContainer items={items} onRemoveListing={handleRemoveListing}/>
        </Route>

        <Route path ="/About">
              <About/>
              </Route>

              <Route path ="/Login">
              <Login onLogin={handleLogin} />
              </Route>

              <Route path ="/SignUp">
              <SignUp/>
              </Route>

             




    </Switch>



    </div>
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
