import React, { useState } from "react";

function ListingCard({
  id, image, price, name,
  onRemoveListing,
  sayHello,
  onAddItem,
  handleAddItem
}) {
  // const [favorite, setFavorite] = useState(false);

  // console.log("this is the id", id)

  // the problem is that i am passing in the wrong params. i am passing in the params for item, not for purchase.
  //  i must pass in user_id and item_id. but how do i do this?


  function handleDeleteClick() {
    fetch(`/items/${id}`, {
      method: "DELETE",
    });
    onRemoveListing(id);
  }



  return (
    <li className="card">
      <div className="image">
        <span className="price">${price}</span>
        <img src={image} alt={name} />
      </div>
      <div className="details">
        {/* {favorite ? (
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
        )} */}
        <strong>{name}</strong>

        <button onClick={handleDeleteClick} className="emoji-button delete">
          🗑
        </button>
        <button onClick={() => handleAddItem(id)}>Buy</button>;

      </div>
    </li>
  );
}

export default ListingCard;


