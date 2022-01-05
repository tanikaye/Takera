import React, { useState } from "react";
import PurCard from "./PurCard";

function PurContainer({ listings, onRemoveListing, items }) {
  // const [purchases, setPurchases] = useState([]);


// do a post request here, like in listingContainer, and ad teh clicked item to state


// items are the list of purchased items
console.log("the following are the items", items)
  return (
    <main>
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