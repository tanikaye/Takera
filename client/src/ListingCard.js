import React, { useState } from "react";

function ListingCard({
  listing: { id, image, description, location, price, name },
  onRemoveListing,
  sayHello,
  onAddItem
}) {
  const [favorite, setFavorite] = useState(false);


  function handleDeleteClick() {
    fetch(`/items/${id}`, {
      method: "DELETE",
    });
    onRemoveListing(id);
  }

  function handleAddItem (e) {
    e.preventDefault();
    fetch("/purchases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        price: price,
        image: image
      }),
    })
      .then((r) => r.json())
      .then((newItem) => onAddItem(newItem))
  }



  return (
    <li className="card">
      <div className="image">
        <span className="price">${price}</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            onClick={() => setFavorite(false)}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={() => setFavorite(true)}
            className="emoji-button favorite"
          >
            ☆
         </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">
          🗑
        </button>
        <button onClick={handleAddItem}>Buy</button>;

      </div>
    </li>
  );
}

export default ListingCard;


{/* <div className="details">
        {favorite ? (
          <button
            onClick={() => setFavorite(false)}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={() => setFavorite(true)}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">
          🗑
        </button>
      </div> */}