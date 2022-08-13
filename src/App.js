import React, { useEffect, useState } from "react";
import Graph from "./components/Graph";
import Sidebar from "./components/Sidebar";

function App() {
  const [allStocks, setAllStocks] = useState([])

  const [searchCode, setSearchCode] = useState("FB")
  // https://data.nasdaq.com/api/v3/datasets.json?collapse=annual&rows=6&order=asc&column_index=1&api_key=miWaxMW2cCAcstxWyXhs
  useEffect(() => {
    fetch(`https://data.nasdaq.com/api/v3/datasets/WIKI/${searchCode}/data.json?api_key=miWaxMW2cCAcstxWyXhs`)
        .then(res => res.json())
        .then(data => setAllStocks(data))        
  }, [])


  //function that will trigger search
  function updateSearch(event) {
    const {name, value} = event.target
    setSearchCode(prevState => {
      return {
        ...prevState, name: value
      }
    })
  }


  console.log(searchCode)
  

  return (
    <div className="flex h-screen">
      <Sidebar allStocks={allStocks} searchCode={searchCode} updateSearch={updateSearch}/>
      <Graph />
    </div>
  );
}

export default App;
