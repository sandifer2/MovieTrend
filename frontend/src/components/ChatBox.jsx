import React, { useEffect, useState, useCallback, useRef } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import PromptBox from './PromptBox';
import AIMsg from './AIMsg';
import UserMsg from './UserMsg';


const ChatBox = () =>{
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hey! I\'m your movie recommendation assistant. Tell me what kind of movie you\'re in the mood for, and I\'ll help you find something great to watch.' }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleSend = async (text) => {
        const userMessage = { role: 'user', content: text };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setIsLoading(true);

        try {
            const res = await fetch('http://localhost:5001/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: updatedMessages }),
            });

            const data = await res.json();

            if (res.ok) {
                setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
            } else {
                setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' }]);
            }
        } catch {
            setMessages(prev => [...prev, { role: 'assistant', content: 'Could not reach the server. Make sure the backend is running.' }]);
        } finally {
            setIsLoading(false);
        }
    };

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
        <div className='relative z-10 flex-1 overflow-y-auto themed-scrollbar space-y-4'>
            {messages.map((msg, i) =>
                msg.role === 'assistant'
                    ? <AIMsg key={i} msg={msg.content} />
                    : <UserMsg key={i} msg={msg.content} />
            )}
            {isLoading && (
                <AIMsg msg="Thinking..." />
            )}
            <div ref={messagesEndRef} />
        </div>
        <div className='relative z-10 mt-4'>
            <PromptBox onSend={handleSend} isLoading={isLoading} />
        </div>
    </div>
)


}

export default ChatBox;
