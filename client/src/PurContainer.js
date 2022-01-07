import React, { useState } from "react";
import PurCard from "./PurCard";

function PurContainer({ listings, onRemoveListing, items, user }) {
  // const [purchases, setPurchases] = useState([]);


// do a post request here, like in listingContainer, and ad teh clicked item to state


// items are the list of purchased items
console.log("the following are the items", items)
console.log("the following is the userguy", user)

  return (
    <main>
      <h2>Welcome, {user.name}, To Your Purchases Page :) <br></br>If You'd Like To Return An Item, Please Dump It In The Trash Can.</h2>
      <ul className="cards">
        {items.map((item) => (
          <PurCard
            purchasedItem={item.item}
            onRemoveListing={onRemoveListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default PurContainer;