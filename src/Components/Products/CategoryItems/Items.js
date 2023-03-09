import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllServices from "../AllProducts/AllProducts";
import BookingModal from "../BookingModal/BookingModal";


const Items = () => {
    const [products, setProducts] = useState([]);
    const [productItem, setProductItem] = useState(null);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            const response = await fetch(`https://used-product-sell-server-one.vercel.app/products`);
            const data = await response.json();
            setProducts(data);
            setIsFetching(false);
        };
        fetchServices();
    }, []);
    return (
        <>
            <div className='text-center'>
                <div className='sm:text-2xl text-xl inline-block border-b-4 border-green-400 rounded px-4 mt-8 text-stromboli font-medium lg:mt-12 '>
                    <h1>Our Products</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 my-7 lg:ml-12 mx-6">
                {products.map((product) => (
                    <AllServices
                        key={product._id}
                        setProductItem={setProductItem}
                        product={product}
                    ></AllServices>
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

export default Items;
