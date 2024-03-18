import React, {useState} from "react";


function DialogueBox({onClose}) {
  return (
    <>
      <div
        id="container"
        onClick={onClose}
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-25"
      >
        <div className="bg-tiffany-blue p-8 rounded-xl shadow-md w-80 md:w-[500px] px-10 relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-3xl text-base-1 cursor-pointer hover:text-base-3 focus:outline-none"
          >
            &times;
          </button>
        
        </div>
      </div>
    </>
  );
}

export default DialogueBox;
