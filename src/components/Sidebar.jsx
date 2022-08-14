import React, { useState } from 'react'


const Sidebar = (props) => {   
  const [searchCode, setSearchCode] = useState("")

  
  return (
    <div className='bg-[#f7f8fd] flex flex-col h-screen w-[256px] overflow-hidden items-center'>
        <p className='text-[32px] text-[#51459e] font-[600] pt-[10px] px-[15px]'>Nasdaq</p>
        <div className='w-full items-center flex'>
          <form className='mx-auto'>
              <input type="text" name="sidebar-search" value={searchCode} onChange={(event) => setSearchCode(event.target.value)} placeholder='Type here to search' className='w-[200px] h-[40px] rounded-[5px] mt-[10px] mx-auto pl-[9px]'/>
          </form>
        </div>
        <div className='overflow-scroll scrollbar-hide w-[200px] overflow-x-hidden bg-white rounded-[5px] mt-[6px] pl-[9px] flex flex-col justify-between'>
            {props.usCompanies.map((company, index) => {
              return <p className='cursor-pointer' key={index} id={index} onClick={(event) => props.updateQuery(index,event)}>{company}</p>
            })}
        </div>
    </div>
  )
}

export default Sidebar