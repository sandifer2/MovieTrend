import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../services/AuthContext";

//TODO add show button 
//maybe use swtich to change between login and sign up 

const RegisterPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');


    const { user, registerUser } = useAuth()
    const navigate = useNavigate();


        useEffect(() => {
        if(user){
            navigate('/')
        }

        },[user]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        if(password.length < 8){
            setError('Password must be at least 8 characters.');
            setIsLoading(false);
            return;
        }

        const userInfo = { password, email }

        try{
            
            await registerUser(userInfo);
            console.log('Login attempt for:', { email });
        }catch(err){
           setError(err.message || 'Login failed. Please try again.'); 
        }finally{
            setIsLoading(false);
        }
        
    }


    return (
        <main>
            <div className='pattern' />
            <div className='wrapper min-h-screen flex items-center justify-center'>
                <div className='w-full max-w-md'>
                    <div className='bg-dark-100 p-8 sm:p-10 rounded-2xl shadow-inner shadow-light-100/10'>
                        <header className='mb-8'>
                            <h1 className='text-3xl sm:text-4xl'>
                                Create your <span className='text-gradient'>Account</span>
                            </h1>
                            <p className='text-gray-100 text-center mt-3'>
                                Create an account to access your favorites
                            </p>
                        </header>

                        <form onSubmit={handleSubmit} className='space-y-5'>
                            {error && (
                                <div className='bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-sm'>
                                    {error}
                                </div>
                            )}

                            <div className='space-y-2'>
                                <label htmlFor='email' className='block text-light-200 text-sm font-medium'>
                                    Email
                                </label>
                                <input
                                    id='email'
                                    type='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='you@example.com'
                                    required
                                    className='w-full bg-light-100/5 px-4 py-3 rounded-lg text-white placeholder-light-200/50 outline-none focus:ring-2 focus:ring-light-100/30 transition-all'
                                />
                            </div>

                            <div className='space-y-2'>
                                <label htmlFor='password' className='block text-light-200 text-sm font-medium'>
                                    Password
                                </label>
                                <input
                                    id='password'
                                    type='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Enter your password'
                                    required
                                    className='w-full bg-light-100/5 px-4 py-3 rounded-lg text-white placeholder-light-200/50 outline-none focus:ring-2 focus:ring-light-100/30 transition-all'
                                />
                            </div>

                            <button
                                type='submit'
                                disabled={isLoading}
                                className='w-full bg-linear-to-r from-[#D6C7FF] to-[#AB8BFF] text-dark-100 font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed mt-6'
                            >
                                {isLoading ? 'Signing up...' : 'Sign Up'}
                            </button>
                        </form>

                        <p className='text-gray-100 text-center text-sm mt-6'>
                            Already have an account?{' '}
                            <a href='/login' className='text-gradient font-medium hover:underline'>
                                Sign in
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </main>


    )


};

export default RegisterPage;