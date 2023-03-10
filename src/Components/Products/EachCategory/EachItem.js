import React from "react";
import Loading from "../../Others/Loading/Loading";
import useAdmin from "../../Pages/Hooks/UseAdmin";
import { Carousel } from 'antd';
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const EachItem = ({ product, setProductItem }) => {
    const {
        img,
        productName,
        sellerMail,
    } = product;

    const [userInfo, isAdminLoading] = useAdmin(sellerMail);
    if (isAdminLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='carousel-img bg-gray-200 rounded-md mx-8 mb-12'>
            <Carousel autoplay>
                <div>
                    <img src={img} alt="" />
                    <h1 className="text-xl font-bold text-center lg:-mt-16">{productName}</h1>
                    <h2 className="text-yellow-500 text-3xl font-semibold text-center italic pb-12 border-2"> Don't Miss Out!</h2>

                </div>
                <div>
                    <img className=' w-full' src={img} alt="" />
                    <h1 className="text-xl font-bold text-center lg:-mt-16">{productName}</h1>
                    <h2 className="text-yellow-500 text-3xl font-semibold text-center italic pb-12">Exciting New Product Launch</h2>

                </div>
                <div>
                    <img className=' w-full' src={img} alt="" />
                    <h1 className="text-xl font-bold text-center lg:-mt-16">{productName}</h1>
                    <h2 className="text-yellow-500 text-3xl font-semibold text-center italic pb-12">Introducing to Our Collection</h2>

                </div>

            </Carousel>
        </div>
    );
};

export default EachItem;
