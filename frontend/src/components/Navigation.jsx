import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {  

        return(
            <nav className='fixed top-0 left-0 right-0 z-50 backdrop-blur-[2px]'>
                <div className='max-w-7xl mx-auto px-5 py-2 flex items-center justify-between'>
                    {/* Navigation Links */}
                    <div className='flex gap-6'>
                        <NavLink
                            to='/'
                            className={({isActive}) => isActive 
                            ? 'text-white font-semibold border-b-2 border-purple-500 pb-1'
                            : 'text-gray-100 hover:text-white transition-colors pb-1'} >


                                <img src='/home.png' alt='home page' className='w-8 h-8 filter brightness-0 invert'/>
                            </NavLink>
                            <NavLink
                            to='/favorites'
                            className={({isActive}) =>
                            isActive
                            ? 'text-white font-semibold border-b-2 border-purple-500 pb-1'
                            : 'text-gray-100 hover:text-white transition-colors pb-1'} >
                            <img src='/heart.png' alt='favorites page' className='w-8 h-8 filter brightness-0 invert'/>
                            </NavLink>
                    </div>
                </div>
            </nav>
        )
}

export default Navigation;