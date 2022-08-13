import React, { useState } from 'react'


const Sidebar = (props) => { 

// const [stocksArray, setStocksArray] = useState([])


const list = props.allStocks.data


console.log(typeof(list))



  return (
    <div className='bg-[#f7f8fd] flex flex-col h-screen w-[256px] overflow-hidden items-center'>
        <p className='text-[32px] text-[#51459e] font-[600] pt-[10px] px-[15px]'>Nasdaq</p>
        <div className='w-full items-center flex'>
            <input type="text" name="sidebar-search" placeholder='Type here to search' className='w-[200px] h-[40px] rounded-[5px] mt-[10px] mx-auto pl-[9px]'/>
        </div>
        <div className='overflow-scroll scrollbar-hide w-[200px] overflow-x-hidden bg-white rounded-[5px] mt-[6px] pl-[9px]'>
            {list}
        </div>
    </div>
  )
}

export default Sidebar