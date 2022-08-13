import React, { useState } from 'react'


const Sidebar = (props) => { 

  const list = props.allStocks


  console.log(list)


  // const renderedList = list?.map((stock, index) => {
  //   return <p key={stock.id} className="text-[16px] mt-2">{stock.name}</p>
  // })



  return (
    <div className='bg-[#f7f8fd] flex flex-col h-screen w-[256px] overflow-hidden items-center'>
        <p className='text-[32px] text-[#51459e] font-[600] pt-[10px] px-[15px]'>Nasdaq</p>
        <div className='w-full items-center flex'>
            <input type="text" name="sidebar-search" value={props.searchCode.value} onChange={(event) => props.updateSearch(event)} placeholder='Type here to search' className='w-[200px] h-[40px] rounded-[5px] mt-[10px] mx-auto pl-[9px]'/>
        </div>
        <div className='overflow-scroll scrollbar-hide w-[200px] overflow-x-hidden bg-white rounded-[5px] mt-[6px] pl-[9px]'>
          
        </div>
    </div>
  )
}

export default Sidebar