import React,{ useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  //create the search here becuase the header also needs access to the function by passing these props
  const [search, setSearch] = useState("")
  console.log("submitted")
  return (//by placing these states into Header here, we now have access to this info in header by passing them as props
    <div className="app">
    <Header search={search} setSearch={setSearch}/>
    <ListingsContainer search={search} />
    </div>
  );
}

export default App;
