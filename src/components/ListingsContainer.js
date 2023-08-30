import React,{ useState, useEffect} from "react";
import ListingCard from "./ListingCard";
const API = 'http://localhost:6001/listings'
function ListingsContainer({search}) {
  //create state using terminology that is relevent to the problem
  const [listings, setListings]=useState([])//here we use an empty array to fetch the data
  
  
  useEffect(()=>{
    fetch(API)
  .then(r=>r.json())
  .then(data=>setListings(data))
  },[])
  //create a .filter to return the new array thta is not case sensitive by using toLowerCase
  const filterData=listings.filter((listing) =>{
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })
  console.log(filterData)
  //after the data is fetched create a .map to display the array items using a singular listing/This will be changed to filterData towards the end to pull from
  const listingsCards = filterData.map((listing) => {
    //this return is creating multiple listing cards(imported from parent)
     //this directly passes "listing" into the card
    return <ListingCard key={listing.id}listing={listing} deleteById={deleteById}/>
  })
  //create a function at the highest level that allows you to delete specific id's
  //this is the highest necessary component in this situation
  function deleteById(id){
    fetch(`http://localhost:6001/listings/${id}`, 
    {method: 'DELETE'})
    .then(r=>r.json)
    .then(data =>{//using a filter here is the best way to delete from the listings array
      const newListingArray = listings.filter((listing)=>{
        //create an If statement that allows the filter function to compare id to lisitng ids and sort the odd one out by returning true or false
        if(id===listing.id){
          return false
        }
        return true
      })
     //here we are appending the new array to the page using setListings
      setListings(newListingArray)
    })
  }//once the delete fetch has been created pass the data into the listing card, and then pass the function iteself as a prop into listingCard
  
  return (
    <main>
      <ul className="cards">
        {listingsCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
