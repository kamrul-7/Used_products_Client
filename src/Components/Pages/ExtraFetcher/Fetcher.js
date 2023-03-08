import video from '../../../Assets/Animation/「𝐷𝑖𝑔𝑖𝑡𝑎𝑙 𝐹𝑢𝑡𝑢𝑟𝑒 𝑇𝑒𝑐ℎ𝑛𝑜𝑙𝑜𝑔𝑦」A Quick Intro to Digital Transformation.mp4'
const Fetcher = () => {
    return (
        <div>
            <div className='text-center sm:-mt-4 sm:-mb-16 lg:mt-8 lg:mb-12'>
                <div className='text-2xl inline-block border-b-4 border-green-400 rounded px-4 text-stromboli lg:mt-4 font-medium mt-4'>
                    <h1>Fetcher BioSecure</h1>
                </div>
            </div>
            <div className='w-full h-screen relative'>
                <video className='w-full h-full py-8 object-cover lg:mt-16' src={video} autoPlay loop muted></video>
            </div>

        </div>
    );
};

export default Fetcher;


