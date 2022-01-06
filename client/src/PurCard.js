import React, { useState } from "react";

function PurCard({
  purchasedItem,
  onRemoveListing,
  sayHello,
  onAddItem
}) {
  // const [favorite, setFavorite] = useState(false);


  // the problem is that i am passing in the wrong params. i am passing in the params for item, not for purchase.
  //  i must pass in user_id and item_id. but how do i do this?

  // /${id}
  function handleDeleteClick(id) {
    fetch(`/purchases/${purchasedItem.id}`, {
      method: "DELETE",
    });
    onRemoveListing(purchasedItem.id);
  }

  console.log("this is the purchased item", purchasedItem)



  return (
    <li className="card">
      <div className="image">
        <span className="price">${purchasedItem.price}</span>
        <img src={purchasedItem.image} alt={purchasedItem.name} />
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
        {/* <strong>{name}</strong> */}

        <button onClick={handleDeleteClick} className="emoji-button delete">
          🗑
        </button>
        {/* <button onClick={handleAddItem}>Buy</button>; */}

      </div>
    </li>
  );
}

export default PurCard;