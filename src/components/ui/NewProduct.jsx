import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);


function NewProduct({ closeModal }) {
    const CloseIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    );

    const [selectedDate, setSelectedDate] = useState(null);

    return (

        <div className="bg-white rounded-2xl shadow-xl p-6 lg:w-full sm:w-96 max-w-lg">
            <div className="flex justify-between items-center mb-6">
                <button onClick={closeModal} className="ml-auto text-pink-400 hover:text-mystic transition-colors">
                    <CloseIcon />
                </button>
            </div>

            <div className="mb-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Paste your link"
                        className="w-full p-3 pr-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mystic focus:border-transparent transition-all"
                    />

                </div>
            </div>

            <div className="mb-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Coupon Code (optional)"
                        className="w-full p-3 pr-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mystic focus:border-transparent transition-all"
                    />

                </div>
            </div>

            <div className="mb-4 mt-16">
                <div className="flex  relative justify-between items-center">
                    {/* DatePicker with custom input (Calendar Icon) */}
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="MM/dd/yyyy"
                        customInput={
                            <div className="flex items-center space-x-2 border text-gray-500 border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-mystic focus:border-transparent transition-all cursor-pointer">
                                <CalendarIcon />
                                <span>{selectedDate ? selectedDate.toLocaleDateString() : 'Validity Date'}</span>
                            </div>
                        }
                    />

                    <button className="px-6 py-2 bg-mystic text-white font-medium rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition-all">
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewProduct
