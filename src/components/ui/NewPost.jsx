import React, { useState } from 'react';
import NewProduct from './NewProduct';
// Simple icon components to replace Lucide React icons
// const CameraIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
//     <circle cx="12" cy="13" r="4"></circle>
//   </svg>
// );

const SmileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
    </svg>
);

// const EyeIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//     <circle cx="12" cy="12" r="3"></circle>
//   </svg>
// );

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const NewPost = ({ closeModal }) => {
    const [openProduct, setOpenProduct] = useState(false);

    return (
        <div className="bg-white rounded-2xl shadow-xl pt-10 pb-3 pl-10 pr-10 lg:w-full sm:w-96 max-w-lg">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xs rounded-full pl-3 pr-3 pt-2 pb-2 text-black bg-pink-200">Everyone can view & reply</h2>
                <button onClick={closeModal} className="text-pink-400 hover:text-mystic transition-colors">
                    <CloseIcon />
                </button>
            </div>

            <div className="mb-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Paste your link"
                        className="w-full p-3 pr-10 border text-black border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mystic focus:border-transparent transition-all"
                    />
                    {/* <CameraIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
                </div>
            </div>

            <div className="mb-5">
                <textarea
                    placeholder="Write something..."
                    className=" h-32 w-full p-3 border text-black border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-mystic focus:border-transparent transition-all"
                    rows={4}
                />
            </div>

            <div className="flex justify-between items-center mb-6">
                <div className="flex sm:space-x-2 lg:space-x-4">
                    {/* <button className="p-2 text-gray-500 hover:text-black hover:bg-pink-100 rounded-full transition-all">
            <CameraIcon />
          </button>
          <button className="p-2 text-gray-500 hover:text-black hover:bg-pink-100 rounded-full transition-all">
            <SmileIcon />
          </button>
          {/* <button className="p-2 text-gray-500 hover:text-black hover:bg-pink-100 rounded-full transition-all">
            <EyeIcon />
          </button> */}
                </div>
                <button className="px-6 py-2 bg-mystic text-white font-medium rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition-all">
                    Post
                </button>
            </div>
            <hr className="mt-3 mb-3" />
            <div className="grid grid-cols-4 gap-3">
                {[...Array(4)].map((_, index) => (
                    <div
                        key={index}

                        className="bg-gray-100 h-24 rounded-xl p-4 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                        {index === 0 && <span className="text-2xl text-gray-400 font-light" onClick={() => setOpenProduct(true)} >+</span>}          </div>
                ))}
            </div>

            {/* Pop-up for NewProduct */}
            {openProduct && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <NewProduct closeModal={() => setOpenProduct(false)} />
                </div>
            )}
        </div>
    );
};

export default NewPost;
