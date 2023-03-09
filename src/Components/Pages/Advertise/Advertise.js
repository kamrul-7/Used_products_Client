import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Loading from "../../Others/Loading/Loading";
import BookingModal from "../../Products/BookingModal/BookingModal";
import EachItem from "../../Products/EachCategory/EachItem";

const Advertise = () => {
    const [products, setProducts] = useState([]);
    const [productItem, setProductItem] = useState(null);

    useEffect(() => {
        fetch("https://used-product-sell-server-one.vercel.app/advertisements")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    if (!products) {
        return <Loading></Loading>
    }

    return (
        <>
            <div className='text-center'>
                <div className='sm:text-2xl text-xl inline-block border-b-4 border-green-400 rounded px-4 mt-8 text-stromboli font-medium lg:mt-12 mb-12'>
                    <h1>Advertise Items</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {products.map((product) => (
                    <EachItem
                        key={product._id}
                        setProductItem={setProductItem}
                        product={product}
                    ></EachItem>
                ))}
            </div>
            {productItem && (
                <BookingModal
                    productItem={productItem}
                    setProductItem={setProductItem}
                ></BookingModal>
            )}
        </>
    );
};

export default Advertise;