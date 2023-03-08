import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import useAdmin from "../../Pages/Hooks/UseAdmin";


const AllServices = ({ product, setProductItem }) => {
    const {

        img,
        productName,
        location,
        Resale,
        Price,
        Use,
        sellerVerified,
        Seller

    } = product;

    const [userInfo] = useAdmin();



    // console.log(sellerMail, userInfo[0]);



    // const { name, sellerVerified } = sellerInfo[0];

    // console.log(productName, sellerMail);

    return (
        <div className="card w-full bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Shoes"
                    style={{ height: "300px", objectFit: "cover" }}
                    className="rounded-xl"
                />
            </figure>
            <div className="card-body items-center text-center pb-12">
                <h2 className="card-title text-2xl font-bold">{
                    productName
                }</h2>
                <div className="divider my-0"></div>
                <p>
                    Location: <strong>{location}</strong>
                </p>
                <div className="divider my-0"></div>
                <p>
                    Orginal Price: <strong>{Price}</strong>
                </p>
                <div className="divider my-0"></div>
                <p>
                    Resale Price: <strong>{Resale}</strong>
                </p>
                <div className="divider my-0"></div>
                <p>
                    Years of Use: <strong>{Use}</strong>
                </p>
                <div className="divider my-0"></div>

                <div className="divider my-0"></div>

                <div className="divider my-0"></div>

                <div className="divider my-0"></div>

                <div className="divider my-0"></div>
                <p>
                    Seller Name: <strong>{Seller}</strong>
                </p>
                <div className="divider my-0"></div>

                <p>
                    Verfication Status :
                    {sellerVerified ? (
                        <FaCheckCircle className="inline ml-4 text-blue-500 rounded-full h-5 w-5"></FaCheckCircle>
                    ) : (
                        <FaTimes className="inline ml-4 text-red-600 bg-red-300 rounded-full h-5 w-5"></FaTimes>
                    )}
                </p>
                <div className="divider my-0"></div>
                <div className="card-actions mt-8">
                    <label
                        htmlFor="bookingModal"
                        onClick={() => setProductItem(product)}
                        className="btn bg-emerald-800 px-4 py-2 rounded-md text-white"
                    >
                        Book Now
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AllServices;