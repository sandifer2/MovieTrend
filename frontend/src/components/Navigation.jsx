import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../services/AuthContext';
import { Home, Heart, Bot } from 'lucide-react';

const Navigation = () => {  

    const { user, logoutUser } = useAuth();

    if(!user) return null;2
    
    

        return(
            <nav className='fixed top-0 left-0 right-0 z-50 backdrop-blur-[2px]'>
                <div className='max-w-7xl mx-auto px-5 py-2 flex items-center justify-between'>
                    <div className='flex gap-6'>
                        <NavLink
                            to='/'
                            className={({isActive}) => isActive 
                            ? 'text-white font-semibold border-b-2 border-purple-500 pb-1'
                            : 'text-gray-100 hover:text-white transition-colors pb-1'} >


                                <Home size={32} />
                            </NavLink>

                            <NavLink
                            to='/favorites'
                            className={({isActive}) =>
                            isActive
                            ? 'text-white font-semibold border-b-2 border-purple-500 pb-1'
                            : 'text-gray-100 hover:text-white transition-colors pb-1'} >
                            <Heart size={32} />
                            </NavLink>

                            <NavLink
                            to='/recommendations'
                            className={({isActive}) => 
                                isActive
                                ? 'text-white font-semibold border-b-2 border-purple-500 pb-1'
                                : 'text-gray-100 hover:text-white transition-colors pb-1'}>
                                <Bot size={32} />
                            </NavLink>

                            <NavLink>

                                <button>Logout</button>
                            </NavLink>
                    </div>
                </div>
            </nav>
        )
}

export default Navigation;