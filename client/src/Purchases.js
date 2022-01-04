import React from "react";
import ListingCard from "./ListingCard";

function Purchases({ listings, onRemoveListing, items }) {
  // const [purchases, setPurchases] = useState([]);



  return (
    <main>
      <ul className="cards">
        {items.map((item) => (
          <ListingCard
          price={item.price}
            key={item.id}
            item={item}
            onRemoveListing={onRemoveListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default Purchases;