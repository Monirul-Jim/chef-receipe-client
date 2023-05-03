import React, { useContext, useState } from 'react';
import NavigationBar from '../../shared/navigationBar/NavigationBar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { user, registerUser,updatePic } = useContext(AuthContext)
    const [error, setError] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl=form.photoUrl.value;
        const password = form.password.value
        registerUser(email, password, name,photoUrl)
            .then(result => {
                const loggedUser = result.user
                updatePic({displayName:name,photoURL:photoUrl})
                console.log(loggedUser);
                form.reset()
            })
            .then(error => {
                console.log(error);
            })
    }
    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h1 className='text-blue-900 text-2xl text-center mt-4'>Please Register</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" />
                        </div>
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input  name='photoUrl' type="text" placeholder="photo url" className="input input-bordered" />
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
                                <input onChange={handleCheckboxChange} type="checkbox" checked={showPassword} className="checkbox" />
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Don't have an account please ? <Link className='text-blue-800 font-semibold underline' to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;