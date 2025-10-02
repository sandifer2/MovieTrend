import React, { useEffect, useState } from 'react';



const PromptBox = () =>{


return (
    <div className='bg-gradient-to-br from-white/30 via-white/10 to-white/5 backdrop-blur-3xl p-4 rounded-full shadow-2xl shadow-black/70 backdrop-saturate-200 backdrop-brightness-110'>
        <input
            type='text'
            placeholder='Enter a prompt so that our Ai agent may help you find a movie you like...'
            className='w-full bg-transparent text-white outline-none font-dm-sans placeholder:text-gray-100/60'
        />
    </div>
)


}





export default PromptBox;