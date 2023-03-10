import React from "react";
import { Card } from "antd";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { AiFillStar } from "react-icons/ai";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import useAdmin from "../../Pages/Hooks/UseAdmin";
import { toast } from "react-hot-toast";
import Loading from "../../Others/Loading/Loading";
const AllServices = ({ product, setProductItem }) => {
    const {
        _id,
        img,
        productName,
        location,
        Resale,
        Price,
        Use,
        time,
        description,
        phoneNumber,
        condition,
        sellerMail,
        Seller,
        reported
    } = product;

    const [userInfo, isAdminLoading] = useAdmin(sellerMail);
    if (isAdminLoading) {
        return <Loading></Loading>
    }

    //Report product
    const handleReportProduct = (product) => {
        const confirmReport = window.confirm(`Report ${product.productName} ??`);
        if (!confirmReport) {
            toast.error("Report process canceled by seller");
            return;
        }
        fetch(
            `https://used-product-sell-server-one.vercel.app/report/${product._id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ reported: true }),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    // refetch();
                    toast.success("Report done Successfully");
                }
            });
    };

    const { name, sellerVerified } = userInfo[0];
    return (
        <div>
            <div>
                <Card>
                    <img src={img} alt="" />
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
                        <p>
                            Verfication Status :
                            {sellerVerified ? (
                                <FaCheckCircle className="inline ml-4 text-blue-500 rounded-full h-5 w-5"></FaCheckCircle>
                            ) : (
                                <FaTimes className="inline ml-4 text-red-600 bg-red-300 rounded-full h-5 w-5"></FaTimes>
                            )}
                        </p>
                    </div>

                    <div className="flex justify-between">

                        <div className="card-actions mt-8 ">

                    <label
                        htmlFor="bookingModal"
                        onClick={() => setProductItem(product)}
                                className=" bg-emerald-800 px-4 py-2 rounded-md text-white hover:bg-gray-800 font-semibold"
                    >
                        Book Now
                            </label>
                            <button
                                onClick={() => handleReportProduct(product)}
                                className="bg-red-400 px-2 py-2 rounded-md text-white hover:bg-gray-800 font-semibold"
                            >
                                Report to admin
                            </button>
                </div>
            </div>
                </Card>
            </div>
        </div>
    );
};

export default AllServices;