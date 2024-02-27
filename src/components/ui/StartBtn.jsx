import React from "react";

function StartBtn({ label }) {
  return (
    <div>
      <button className='text-contrast-3 bg-patriarch hover:bg-patriarch-dim hover:scale-[1.01] font-poppins md:px-5 px-4 md:py-3 py-2 md:text-lg text-xs rounded-3xl border border-mystic/50' >
        {label}
        </button>
    </div>
  );
}

export default StartBtn;
