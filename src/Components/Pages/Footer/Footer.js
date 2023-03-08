import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white py-4 lg:py-8 static left-0 right-0 bottom-0">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="w-full lg:w-auto lg:mr-auto">
                            <p>&copy; BioSecure by Kamrul 2023</p>
                        </div>
                        <div className="w-full lg:w-auto mt-4 lg:mt-0">
                            <ul className="flex flex-wrap justify-center lg:justify-end">
                                <li className="mr-4"><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;