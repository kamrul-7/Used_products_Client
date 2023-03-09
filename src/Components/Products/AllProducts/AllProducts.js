import React from "react";
import { Card } from "antd";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { AiFillStar } from "react-icons/ai";
const AllServices = ({ product, setProductItem }) => {
    const {
        productName,
        img,
        location,
        Resale,
        Price,
        Use,
        time,
        reported,
        condition,
        phoneNumber,
        description,
        Seller,

    } = product;
    return (
        <div>
            <div>
                <Card
                    hoverable
                    className="border-2"
                    cover={<PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>}

                >
                    <div className="flex justify-between items-center">
                        <div className='flex'>
                            <AiFillStar className='text-yellow-400'></AiFillStar>
                            <AiFillStar className='text-yellow-400'></AiFillStar>
                            <AiFillStar className='text-yellow-400'></AiFillStar>
                            <AiFillStar className='text-yellow-400'></AiFillStar>
                            <AiFillStar ></AiFillStar>
                        </div>

                    </div>
                    <h1 className='text-2xl text-emerald-600 font-semibold italic mb-4'>{productName} </h1>

                    <div className="italic text-base mt-2 text-gray-800">
                        {
                            description.length > 100 ?
                                <>{description.slice(0, 100) + '...'}  </>
                                :
                                description
                        }
                    </div>
                    <div className="font-semibold ">
                        <p className="font-bold italic text-base mt-2 text-gray-800">Condition: <span className="text-green-600">{condition}</span></p>

                        <p className="font-bold italic text-base mt-2 text-gray-800">Original Price: <span className="text-green-600">{Price}</span> Tk</p>

                        <p className="font-bold italic text-base mt-2 text-gray-800">Resale Price: <span className="text-green-600">{Resale}</span> Tk</p>

                        <p className="font-bold italic text-base mt-2 text-gray-800">Use of Product: <span className="text-green-600">{Use}</span> years</p>

                        <p className="font-bold italic text-base mt-2 text-gray-800">Seller name: <span className="text-green-600">{Seller}</span></p>

                        <p className="font-bold italic text-base mt-2 text-gray-800">Phone Number: <span className="text-green-600">{phoneNumber}</span></p>

                        <p className="font-bold text-base mt-2 text-gray-800">Location: <span className="text-green-600">{location}</span></p>

                        <p className="font-bold text-base mt-2 text-gray-800">Upload Time: <span className="text-green-600">{time}</span></p>

                        <p className="font-bold text-base mt-2 text-gray-800"><span className="text-green-600">{reported}</span></p>

                    </div>

                    <div className="flex justify-between">

                        <div className="card-actions mt-8 lg:ml-24 ml-16">

                    <label
                        htmlFor="bookingModal"
                        onClick={() => setProductItem(product)}
                                className=" bg-emerald-800 px-4 py-2 rounded-md text-white hover:bg-gray-800 font-semibold"
                    >
                        Book Now
                    </label>
                </div>
            </div>
                </Card>
            </div>
        </div>
    );
};

export default AllServices;