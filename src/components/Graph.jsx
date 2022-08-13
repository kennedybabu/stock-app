import React from 'react'
import {BsCalendar3} from "react-icons/bs"

const Graph = () => {
  return (
    <div className='w-full'>
        {/* container */}

        <div className='w-full px-[21px] pt-[22px]'>
            <div className='w-full flex justify-between'>
                <p className='text-[22px] text-[#51459e] font-[500]'>SVTR</p>
                <div className='flex items-center'>
                    <BsCalendar3 className='text-[#51459e] text-[32px]'/>
                    <button className='w-[290px] h-[50px] rounded-[10px] text-white text-[18px] font-[500] ml-[32px] bg-[#51459e]'>Jun 5,1998 - Dec 31, 2018</button>
                </div>
            </div>
            <div className='wrapper w-full h-[82vh] mt-[27px]'>

            </div>
        </div>

    </div>
  )
}

export default Graph