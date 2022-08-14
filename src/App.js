
import React, { useEffect, useState } from "react";
import Graph from "./components/Graph";
import Sidebar from "./components/Sidebar";


function App() {
  
  const [querySearch, setQuerySearch] = useState('FB')

  const usCompanies = ['AAPL', 'MSFT', 'AMZN', 'GOOG', 'TSLA', 'GOOGL', 'NVDA', 'PYPL', 'INTC',
  'CMCSA', 'ADBE', 'CSCO', 'PEP', 'AVGO', 'TXN', 'TMUS', 'COST', 'QCOM']

  const [stock, setStock] = useState({})

  const [count, setCount] = useState(1)


  function updateQuery(index, event) {
    setQuerySearch(usCompanies[index])
    updateCount()
  }  

  function getStock(querySearch){
    const NASDAQ_API_KEY="miWaxMW2cCAcstxWyXhs"   

    fetch(`https://data.nasdaq.com/api/v3/datasets/WIKI/${querySearch}.json?collapse=annual&rows=6&order=asc&column_index=1&api_key=${NASDAQ_API_KEY}`)
          .then(res => res.json())
          .then(data => setStock(data))
  }  

  
  useEffect(()=> {
    getStock(querySearch)
  }, [count])


  function updateCount() {
      setCount(count + 1)
  }


  //function that will trigger search
  function updateSearch(Query, event) {
    event.preventDefault()    
  }
  

  return (
    <div className="flex h-screen">
      <Sidebar updateSearch={updateSearch} updateQuery={updateQuery} usCompanies={usCompanies} updateCount={updateCount}/>
      <Graph stock={stock}/>      
    </div>
  );
}

export default App;
