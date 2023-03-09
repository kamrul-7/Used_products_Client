import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
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
        _id,
        img,
        productName,
        location,
        resalePrice,
        orginalPrice,
        yearsOfuse,
        time,
        description,
        phoneNumber,
        condition,
        sellerMail,
    } = product;

    const [userInfo, isAdminLoading] = useAdmin(sellerMail);
    // console.log(userInfo[0]);

    // const {
    //   data: sellerInfo = [],
    //   isLoading,
    //   refetch,
    // } = useQuery({
    //   queryKey: [sellerMail],
    //   queryFn: async () => {
    //     const res = await fetch(`https://used-product-sell-server-one.vercel.app/users/${sellerMail}`);
    //     const data = await res.json();
    //     return data;
    //   },
    // });

    // useEffect(() => {
    //   fetch(`https://used-product-sell-server-one.vercel.app/users/${sellerMail}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(productName);
    //     });
    // }, []);

    // if (isLoading) {
    //   return <p>Loading</p>;
    // }
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

    // console.log(sellerMail, userInfo[0]);

    const { name, sellerVerified } = userInfo[0];

    // const { name, sellerVerified } = sellerInfo[0];

    // console.log(productName, sellerMail);



    return (
        <div className='carousel-img bg-gray-200 rounded-md mx-8 mb-12'>
            <Carousel autoplay>
                <div>
                    <img src={img} alt="" />
                    <h1 className="text-xl font-bold text-center lg:-mt-24">{productName}</h1>
                    <h2 className="text-yellow-500 text-3xl font-semibold text-center italic pb-12 border-2"> Don't Miss Out!</h2>
                    <button
                        onClick={() => handleReportProduct(product)}
                        className="text-white py-2 px-4 font-semibold rounded-md bg-emerald-800 hover:bg-gray-800 lg:ml-56 ml-20 mb-8 lg:mb-16"
                    >
                        Report to admin
                    </button>
                </div>
                <div>
                    <img className=' w-full' src={img} alt="" />
                    <h1 className="text-xl font-bold text-center lg:-mt-24">{productName}</h1>
                    <h2 className="text-yellow-500 text-3xl font-semibold text-center italic pb-12">Exciting New Product Launch</h2>
                    <button
                        onClick={() => handleReportProduct(product)}
                        className="text-white py-2 px-4 font-semibold rounded-md bg-emerald-800 hover:bg-gray-800 lg:ml-56 ml-20 mb-8 lg:mb-16"
                    >
                        Report to admin
                    </button>
                </div>
                <div>
                    <img className=' w-full' src={img} alt="" />
                    <h1 className="text-xl font-bold text-center lg:-mt-24">{productName}</h1>
                    <h2 className="text-yellow-500 text-3xl font-semibold text-center italic pb-12">Introducing to Our Collection</h2>
                    <button
                        onClick={() => handleReportProduct(product)}
                        className="text-white py-2 px-4 font-semibold rounded-md bg-emerald-800 hover:bg-gray-800 lg:ml-56 ml-20 mb-8 lg:mb-16"
                    >
                        Report to admin
                    </button>
                </div>

            </Carousel>
        </div>
    );
};

export default EachItem;

{/* <figure className="px-10 pt-10">
<img
    src={img}
    alt="Shoes"
    style={{ height: "300px", objectFit: "cover" }}
    className="rounded-xl"
/>
</figure>
<div className="card-body items-center text-center">
<h2 className="card-title text-2xl font-bold">{productName}</h2>
<div className="divider my-0"></div>
<p>
    Location: <strong>{location}</strong>
</p>
<div className="divider my-0"></div>
<p>
    Orginal Price: <strong>{orginalPrice}</strong>
</p>
<div className="divider my-0"></div>
<p>
    Resale Price: <strong>{resalePrice}</strong>
</p>
<div className="divider my-0"></div>
<p>
    Years of Use: <strong>{yearsOfuse}</strong>
</p>
<div className="divider my-0"></div>
<p>
    Time of Post: <strong>{time}</strong>
</p>
<div className="divider my-0"></div>
<p>
    About: <strong>{description}</strong>
</p>
<div className="divider my-0"></div>
<p>
    Condition: <strong>{condition}</strong>
</p>
<div className="divider my-0"></div>
<p>
    Contact: <strong>{phoneNumber}</strong>
</p>
<div className="divider my-0"></div>
<p>
    Seller Name: <strong>{name}</strong>
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
<div className="card-actions">
    <label
        htmlFor="bookingModal"
        onClick={() => setProductItem(product)}
        className="btn btn-primary"
    >
        Book Now
    </label>
</div>
<button
    onClick={() => handleReportProduct(product)}
    className="btn btn-warning"
>
    Report to admin
</button>
</div> */}