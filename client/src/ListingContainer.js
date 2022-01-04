import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onRemoveListing, onAddItem }) {
  return (
    <main className="page">
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard
          name={listing.name}
          price={listing.price}
            key={listing.id}
            listing={listing}
            onRemoveListing={onRemoveListing}
            onAddItem={onAddItem}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;