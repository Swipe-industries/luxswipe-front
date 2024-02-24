import React from 'react'

function StartBtn({label}) {
  return (
    <div>
      <button className='text-white bg-[#6A0171] font-poppins md:px-5 px-4 md:py-3 py-2 md:text-2xl text-[20px] rounded-[25px] ' >
        {label}
        </button>
    </div>
  )
}

export default StartBtn
