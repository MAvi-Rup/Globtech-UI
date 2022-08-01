import React from 'react';
import Navbar from './Navbar';
import Plane from './Plane';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Plane></Plane>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 bg-color px-9 py-3 pb-24">
                <div className='pr-16'>
                    <div className='lg:pt-16 pt-6'>
                        <div>
                            <div className='lg:text-8xl text-4xl text-slate-900 pb-8 pt-14 font-semibold' style={{ color: '#28ACE2',fontFamily:'Poppins' }}>Welcome to <span className='pt-32' style={{ color: "#E3F891" }}>Globetech</span>
                            </div>
                            <div className='pb-8 text-justify' style={{ color: '#2EBBE5',fontFamily:'Poppins' }}>We are committed to deliver <span style={{ color: "#E3F891" }}>best IT services.</span> Our Consultants have experience in working with clients. We have extensive experience in the software application space and also offer a broad range and depth of technology.
                            </div>

                        </div>


                    </div>
                    <div className='flex gap-6'>
                        <button className='border-solid border-2 text-2xl font-bold px-7 py-4 rounded-sm' style={{ backgroundColor: '#DEF77D',fontFamily:'Poppins' }}>Support us</button>
                        <button className='border-solid border-2 text-2xl font-bold px-7 py-4 rounded-sm' style={{ backgroundColor: 'transparent',color:'#8FE5FF',fontFamily:'Poppins' }}>Our Mission</button>

                    </div>
                </div>

                <div className='overflow-hidden pt-6'>
                <div className='transition duration-300 hover:rotate-[365deg]'>
                    <img  src="https://i.ibb.co/rshsgVm/circle.png" alt="Circle" />

                </div>
                </div>
            </div>

        </div>
    );
};

export default Home;