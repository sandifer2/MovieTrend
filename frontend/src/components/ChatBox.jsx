import React, { useEffect, useState, useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import PromptBox from './PromptBox';
import AIMsg from './AIMsg';
import UserMsg from './UserMsg';


const ChatBox = () =>{
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

return (
    <div className='relative flex flex-col h-[70vh] w-full max-w-4xl mx-auto rounded-3xl p-6 bg-white/2 backdrop-blur-sm border border-white/20 overflow-hidden'>
        <Particles
            id="chatbox-particles"
            init={particlesInit}
            options={{
                fullScreen: false,
                background: {
                    color: {
                        value: 'transparent',
                    },
                },
                fpsLimit: 120,
                particles: {
                    color: {
                        value: '#ffffff',
                    },
                    links: {
                        color: '#ffffff',
                        distance: 150,
                        enable: true,
                        opacity: 0.15,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 0.5,
                        direction: 'none',
                        random: false,
                        straight: false,
                        outModes: {
                            default: 'bounce',
                        },
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 40,
                    },
                    opacity: {
                        value: 0.2,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
            className='absolute inset-0 rounded-3xl'
        />
        <div className='relative z-10 flex-1 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 hover:scrollbar-thumb-white/30'>
            <AIMsg msg="How can I help?" />
            <UserMsg msg="Please help me find a movie" />
        </div>
        <div className='relative z-10 mt-4'>
            <PromptBox/>
        </div>
    </div>
)


}

export default ChatBox;