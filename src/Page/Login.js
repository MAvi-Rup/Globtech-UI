import React from 'react';

const Login = () => {
    return (
        <div>
            <div class="flex">
                <div class="flex-none w-1/4 h-screen bg-color">
                    <h1 className='font-semibold text-center lg:text-4xl text-2xl py-12' style={{
                        color: '#0096C7', fontFamily:
                            'Montserrat'
                    }}>Globetech Company Limited</h1>
                    <p className='text-center text-sm font-semibold text-white' style={{
                        fontFamily:
                            'Montserrat'
                    }}>Make yourself digitalized & more effecient</p>
                </div>
                <div class="grow h-screen w-screen" style={{ background: '#C0CDD3' }}>
                    <div className='flex items-center justify-center h-screen'>
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
                            <h1 className='text-3xl font-light text-center py-9'>Welcome</h1>
                            <p className='text-center font-xs' style={{color:'#928B8B'}}>Sign in to your account</p>
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" class="input border-1 rounded-none" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" class="input border-1 rounded-none" />
                                    <label class="label">
                                        <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>


    );
};

export default Login;