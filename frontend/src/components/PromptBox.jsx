import React, { useEffect, useState } from 'react';



const PromptBox = () =>{


return (
    <div className='bg-gradient-to-br from-white/30 via-white/10 to-white/5 backdrop-blur-3xl p-4 rounded-full shadow-2xl shadow-black/70 backdrop-saturate-200 backdrop-brightness-110 flex items-center gap-3'>
        <input
            type='text'
            placeholder='Enter a prompt so that our Ai agent may help you find a movie you like...'
            className='flex-1 bg-transparent text-white outline-none font-dm-sans placeholder:text-gray-100/60'
        />
        <button className='bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
        </button>
    </div>
)


}


export default PromptBox;