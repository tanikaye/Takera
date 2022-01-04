import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom"
import Header from "./Header";
import ListingsContainer from "./ListingContainer";
import Purchases from "./Purchases";
// import NavBar from "./NavBar";


function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  // const [page, setPage] = useState("/ListingContainer")

  function onAddItem(newItem) {
    const updatedItemsArray = [...items, newItem];
    setItems(updatedItemsArray);
  }


  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then(data => setListings(data));
  }, []);

  // function sayHello() {
  //   alert('You clicked me!');

  // }


  function handleRemoveListing(id) {
    const newListings = listings.filter((listing) => listing.id !== id);
    setListings(newListings);
  }

  const displayedListings = listings.filter((listing) =>
    listing.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
          {/* <Header onChangePage={setPage}/> */}
          <Switch>
        <Route path ="/items">
              <Items/>
        </Route>
        <Route path="/purchases">
              <Purchases/>
        </Route>
        <Route path ="/about">
              <About/>
        </Route>

    </Switch>

      <Header onSearch={setSearch} />
      <ListingsContainer
      onAddItem={onAddItem}
        listings={displayedListings}
        onRemoveListing={handleRemoveListing}
      />
      <Purchases items={items}/>
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
