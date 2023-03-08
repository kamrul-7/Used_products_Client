import React from 'react';
import img from '../../../Assets/2.png'


const Banner = () => {
    return (
        <div className='bg-gray-200 md:flex justify-between lg:p-16 p-6'>
            <div className=' w-72 lg:w-1/2'>
                <img src={img} alt="" />
            </div>
            <div className=' mt-16'>
                <h2 className='md:text-3xl sm:text-2xl text-xl text-gray-900 font-medium my-4 text-center'>Secure Your Premises with bioSecure <br /> Biometric Access Control Systems</h2>
                <div className='text-center'>
                    <p>Check out our exclusive collection of Biometric Access Control Systems. <br /> We offer a variety of options suitable for different needs and settings.</p>
                    <button className="bg-emerald-800 text-white hover:bg-gray-800 transition hover:text-white md:px-4 px-2 md:py-1.5 py-1.5 rounded text-xl mt-6">
                        Explore BioSecure
                    </button>
                    <button className="text-gray-800 border-2 border-gray-800 hover:bg-gray-800 transition hover:text-white md:px-4 px-2 md:py-1 py-0.5 rounded ml-4 text-xl">
                        Dashboard
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Banner;