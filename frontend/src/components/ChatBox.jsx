import React, { useEffect, useState } from 'react';
import PromptBox from './PromptBox';


const ChatBox = () =>{


return (
    <div className='flex flex-col h-[70vh] w-full max-w-4xl mx-auto rounded-3xl p-6 bg-white/2 backdrop-blur-sm border border-white/20'>
        <div className='flex-1 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 hover:scrollbar-thumb-white/30'>
            
        </div>
        <div className='mt-4'>
            <PromptBox/>
        </div>
    </div>
)


}





export default ChatBox;