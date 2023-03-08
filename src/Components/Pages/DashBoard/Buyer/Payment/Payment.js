import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(
    'pk_test_51M7HhrAE9i5fcaIL5kKK9fegOzF7An7AezDA2bMOcCMTOCpBjbbdkLmxM5ct8cjHbzhBXSQ9mHRO0tRqFysgU9Kb00u9YAE2wg'
);

const Payment = () => {
    const booking = useLoaderData();
    const {
        userName,
        price,
        paidStatus,
        contact,
        orginalProductId,
        email,
        productName,
    } = booking;
    //   console.log(data);
    return (
        <div>
            <h3 className="text-3xl text-center">Payment for {productName}</h3>
            <p className="text-xl text-center">Please Pay {price} for this Item</p>
            <div className="w-96 my-12">
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;