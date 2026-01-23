import React, { useEffect, useState} from 'react';
import Spinner from '../components/Spinner';
import MovieCard from '../components/MovieCard';
import PromptBox from '../components/PromptBox';
import ChatBox from '../components/ChatBox';





const RecommendationPage = () => {
    return (
        <div className='pattern'>
            <div className='wrapper'>
                <header>
                    <h1>Your <span className='text-gradient'>AI</span> Movie Finding Agent</h1>
                    <img src='./hero.png' alt='hero banner'/>
                </header>
                
               <ChatBox/>



            </div>
        </div>
        )
}

export default RecommendationPage;
