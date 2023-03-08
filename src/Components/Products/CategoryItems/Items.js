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
            const response = await fetch(`http://localhost:5000/products`);
            const data = await response.json();
            setProducts(data);
            console.log(data);
            setIsFetching(false);
        };
        fetchServices();
    }, []);
    return (
        <>
            <div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-7">
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
