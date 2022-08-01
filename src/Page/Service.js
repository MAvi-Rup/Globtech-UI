import React from 'react';

const Service = ({ service }) => {

    return (
        <div>
            <div style={{height:'700px'}} class="card bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={service.img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 style={{color:'#2397CD',fontFamily:'Montserrat'}} class="card-title text-2xl">{service.title}</h2>
                    <p style={{fontFamily:'Poppins'}} className='text-justify text-lg'>{service.desc}</p>
                    <div class="card-actions">
                        <button style={{fontFamily:'Montserrat', background:'#2397CD'}} class="btn btn-primary text-white lg:text-2xl text-xl px-7">MORE</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;