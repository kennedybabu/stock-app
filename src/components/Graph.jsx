import React, {useEffect, useState} from 'react'
import {BsCalendar3} from "react-icons/bs"
import {Line} from "react-chartjs-2"
import StockGraph from './StockGraph'

const Graph = ({stock}) => {


  // const data = {
  //   labels: stock && stock.dataset && stock.dataset.data.map(item => item[0]),
  //   datasets : [
  //     {
  //       label: stock && stock.dataset && stock.dataset.name,
  //       data : stock && stock.dataset && stock.dataset.data.map(item => item[1])
  //     }
  //   ]
  // } 

  // console.log(data) 
 
  return (
    <div className='w-full'>
    { stock && stock.dataset && stock.dataset.data ? 
      <div className='w-full'>   
      <div className='w-full px-[21px] pt-[22px]'>
          <div className='w-full flex justify-between'>
          { stock && stock.dataset && stock.dataset.data ?  <p className='text-[22px] text-[#51459e] font-[500]'>{stock.dataset.dataset_code}</p> : null }              
              <div className='flex items-center'>
                  <BsCalendar3 className='text-[#51459e] text-[32px]'/>
                  {/* {stock.dataset.name} */}
                  <button className='w-[290px] h-[50px] rounded-[10px] text-white text-[18px] font-[500] ml-[32px] bg-[#51459e]'>Jun 5,1998 - Dec 31, 2018</button>
              </div>
          </div>
          <div className='wrapper w-full h-[80vh] mt-[27px]'>
            <StockGraph />
          </div>
      </div>
  </div> : <p className='pl-4 mt-4'>Loading</p>
}
</div>
    
  )
}

export default Graph

  