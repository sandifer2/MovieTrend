import { useEffect, useState} from 'react';



const LoginPage = () => {

    return (
        <div className='pattern'>
        <div className='wrapper'>    
            <div className='box'>
            <header>
                <h1 className='text-gradient'>Login</h1>
            </header>
            <form className='flex flex-col items-center'>
            <input
            placeholder='Username'
            className='text-white'
            />
            <input
            placeholder='Password'
            className='text-white'
            />
            




            </form>
            </div>
            

      

            
        </div>
        </div>


    )






}

export default LoginPage;