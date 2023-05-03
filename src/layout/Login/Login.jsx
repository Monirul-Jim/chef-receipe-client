import React from 'react';
import NavigationBar from '../../shared/navigationBar/NavigationBar';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin=(event)=>{
        console.log('i am in');
    }
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h1 className='text-blue-900 text-2xl text-center mt-4'>Please Login</h1>
            <div className="max-w-md mx-auto mt-10">
                <form  onSubmit={handleLogin}className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                         Login
                        </button>
                    </div>
                    <p>Don't have an account please ? <Link className='text-blue-800 font-semibold underline' to='/register'>Register</Link></p>
                </form>
            </div>

        </div>
    );
};

export default Login;