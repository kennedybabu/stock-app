import React, { useEffect, useState } from "react";
import Graph from "./components/Graph";
import Sidebar from "./components/Sidebar";

function App() {
  const [allStocks, setAllStocks] = useState([])

  useEffect(() => {
    fetch("https://data.nasdaq.com/api/v3/datasets/OPEC/ORB.json?api_key=miWaxMW2cCAcstxWyXhs")
        .then(res => res.json())
        .then(data => console.log(data.dataset.data))
  }, [])
 

  return (
    <div className="flex h-screen">
      <Sidebar />
      <Graph />
    </div>
  );
}

export default App;
