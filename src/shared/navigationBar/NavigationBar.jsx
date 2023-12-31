import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';

const NavigationBar = () => {
    const {user,logOut,updatePic}=useContext(AuthContext)
    const handleLogout=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.log(error))
    }
    return (
            <div className="navbar bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'>Home</Link>
                
                        <Link to='/blog-page'>Blog</Link>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl text-white" >Hungry Monster</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-white menu-horizontal px-1 space-x-6">
                  <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/blog-page'>Blog</ActiveLink>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user &&  <img title={user.email}  className='h-12 w-12 rounded-full' src={user?.photoURL} alt="Profile Picture" />
                }
                
               {
                user ?  <Link><button onClick={handleLogout} className="btn ms-2 btn-primary btn-sm">Logout</button></Link> :
                <Link to='/login'><button className="btn btn-primary btn-sm">Login</button></Link>
               }
            </div>
        </div>
    );
};

export default NavigationBar;