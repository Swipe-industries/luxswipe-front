import React from 'react'

function StartBtn({label}) {
  return (
    <div>
      <button className='text-contrast-3 bg-patriarch hover:bg-patriarch-dim font-poppins md:px-5 px-4 md:py-3 py-2 md:text-xl text-sm rounded-3xl' >
        {label}
        </button>
    </div>
  )
}

export default StartBtn
