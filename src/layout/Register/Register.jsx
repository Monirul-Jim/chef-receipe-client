import React, { useContext } from 'react';
import NavigationBar from '../../shared/navigationBar/NavigationBar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const {registerUser}=useContext(AuthContext)
    
    const handleRegister=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value
        console.log(name,email,password);
    }
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h1 className='text-blue-900 text-2xl text-center mt-4'>Please Register</h1>
            <div  className="hero min-h-screen bg-base-200">
                {/* <div className="hero-content flex-col lg:flex-row-reverse"> */}
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='Name' type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='Email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='Password' type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleRegister} className="btn btn-primary">Register</button>
                            </div>
                            <p>Don't have an account please ? <Link className='text-blue-800 font-semibold underline' to='/login'>Login</Link></p>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default Register;