import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, 
  PointElement, LineElement, Title, Tooltip, Legend,
  } from 'chart.js';
  
  ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
  );  
  

function StockGraph({stock}) {
  const data = {
    labels: stock && stock.dataset && stock.dataset.data.map(item => item[0]),
    datasets: [
      {
        label: stock && stock.dataset && stock.dataset.name,
        data : stock && stock.dataset && stock.dataset.data.map(item => item[1])
      }
    ]    
  } 
    
  return  <Line data={data}/>
  
}




export default StockGraph