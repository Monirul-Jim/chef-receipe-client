import React, { useContext, useState } from 'react';
import NavigationBar from '../../shared/navigationBar/NavigationBar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGoogle,FaGithub} from 'react-icons/fa';

const Login = () => {
    const { loginUser,handleWithGoogle,handleGithub} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        loginUser(email, password)
            .then(result => {
                const logged = result.user;
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    const loginWithGooglePopup=()=>{
        handleWithGoogle()
        .then(result=>{
            const user = result.user;
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const loginWithGithub=()=>{
        handleGithub()
        .then(result=>{
            const user=result.user
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h1 className='text-blue-900 text-2xl text-center mt-4'>Please Login</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" />
                        </div>
                        {/* click on show password  */}

                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Show Password</span>
                                <input onChange={handleCheckboxChange} type="checkbox" checked={showPassword} className="checkbox checkbox-primary" />
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Don't have an account please ? <Link className='text-blue-800 font-semibold underline' to='/register'>Register</Link></p>
                    </form>
                    <button onClick={loginWithGooglePopup} className="btn btn-outline btn-primary"><FaGoogle className=' me-4'></FaGoogle> Login With Google</button>
                    <button onClick={ loginWithGithub} className="btn btn-outline btn-secondary"> <FaGithub className='me-4'></FaGithub> Login With Github</button>
                </div>
            </div>

        </div>
    );
};

export default Login;