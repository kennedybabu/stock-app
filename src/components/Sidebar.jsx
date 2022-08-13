import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-[#f7f8fd] flex flex-col h-screen w-[256px]'>
        <p className='text-[32px] text-[#51459e] font-[600] pt-[10px] px-[15px]'>Nasdaq</p>
        <div className='w-full items-center flex'>
            <input type="text" name="sidebar-search" placeholder='Type here to search' className='w-[200px] h-[40px] rounded-[5px] mt-[10px] mx-auto pl-[9px]'/>
        </div>
    </div>
  )
}

export default Sidebar