import React from "react";
import ListingCard from "./ListingCard";

function ListingContainer({ listings, onRemoveListing, onAddItem, items, handleAddItem }) {
  // i want to map out listings on the main page, but also map out items on the purchases page. how???
  return (
    <main className="page">
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard
          name={listing.name}
          price={listing.price}
          image={listing.image}
            id={listing.id}
            listing={listing}
            onRemoveListing={onRemoveListing}
            handleAddItem={handleAddItem}
            onAddItem={onAddItem}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingContainer;