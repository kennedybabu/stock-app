import React, { useEffect, useState } from "react";
import Graph from "./components/Graph";
import Sidebar from "./components/Sidebar";

function App() {
  const [allStocks, setAllStocks] = useState([])

  useEffect(() => {
    fetch("https://data.nasdaq.com/api/v3/datasets/OPEC/ORB.json?api_key=miWaxMW2cCAcstxWyXhs")
        .then(res => res.json())
        .then(data => setAllStocks(data.dataset))
  }, [])

  console.log(allStocks)
 

  return (
    <div className="flex h-screen">
      <Sidebar allStocks={allStocks} />
      <Graph />
    </div>
  );
}

export default App;
