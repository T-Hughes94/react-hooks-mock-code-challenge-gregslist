//Add a useSate after the cards are rendered
import React, { useState } from "react";

//pass listing as a prop for the component to access the data. then fill in info with the correct elements to display
function ListingCard({listing, deleteById}) {//once deleteById is set as a prop pass it to an onCLick in the button itself below
 
  //create a state that sets the initial state to where nothing happens unless you click it
  const [favorite, setFavortie]=useState(false)
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
      
        {favorite ? (//add an onClick to the button and call setFavorite in an arrow function that returns the opposite of favorite once clicked
          <button onClick={()=>setFavortie(!favorite)} className="emoji-button favorite active">★</button>
        ) : (//follow the same steps for the button to return to its former state
          <button onClick={()=>setFavortie(!favorite)} className="emoji-button favorite">☆</button>
        )}
      
       <strong>{listing.description}</strong>
        <span> · {listing.location}</span> 
        <button onClick={()=>deleteById(listing.id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
