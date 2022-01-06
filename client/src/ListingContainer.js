import React from "react";
import ListingCard from "./ListingCard";

function ListingContainer({ listings, onRemoveListing, onAddItem, items, handleAddItem, user }) {
  // i want to map out listings on the main page, but also map out items on the purchases page. how???

  console.log('oooyy', user)
  if (user) {
    return (
      <main className="page">
      <h1>hi {user.name}</h1>
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
    )}
  else {
    return (
      <h1>no user</h1>
    )}
}

export default ListingContainer;