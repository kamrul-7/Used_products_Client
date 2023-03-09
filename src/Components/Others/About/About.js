import React from 'react';

const About = () => {
    return (
        <div>

            <div className="card w-56 lg:w-full bg-base-100 shadow-xl image-full rounded-none !important">
                <figure><img src="https://recfaces.com/wp-content/uploads/2021/08/biometric-devices-%E2%80%94-complete-guide-on-technology.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='text-center'>
                        <div className='sm:text-2xl text-xl inline-block border-b-4 border-green-400 rounded px-4 mt-8 text-stromboli font-medium lg:mt-12 '>
                            <h1>About Us</h1>
                        </div>
                    </div>
                    <h2 className="card-title lg:mt-6 lg:mx-16 lg:text-2xl italic">As a company called BioSecure, we are committed to providing cutting-edge biometric security solutions to protect our customers' sensitive information and assets. Our products are designed to provide a seamless and secure user experience, while eliminating the risk of identity theft and fraud.</h2>
                    <div className='lg:flex justify-around mt-16'>

                        <div className="card w-72 lg:w-96 bg-slate-50 text-black">
                            <div className="card-body">
                                <h2 className="card-title text-red-500 text-3xl font-bold mb-4">Why you Choice us?</h2>
                                <p>We offer a range of biometric security products, including advanced authentication systems that use a variety of biometric identifiers such as fingerprint, facial recognition, voice recognition, and iris scan technology. Our biometric encryption technology is designed to protect sensitive data from unauthorized access and use.</p>

                            </div>
                        </div>
                        <div className='mt-8 lg:mt-0 lg:w-96'>
                            <div className="card bg-slate-50 text-black">
                                <div className="card-body">
                                    <h2 className="card-title text-red-500 text-3xl font-bold mb-4">why we are best?</h2>
                                    <p>As a biometric security company, BioSecure is committed to providing our customers with the best possible products and services. Here are some reasons why we believe we are the best:

                                        Expertise and Experience: Our team of experts has years of experience in the field of biometric security and has a deep understanding of the latest technologies and trends. We have worked with clients from a wide range</p>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>



        </div>
    );
};

export default About;
