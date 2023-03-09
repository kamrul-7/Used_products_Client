import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Others/Loading/Loading";
import EachCategory from "./EachCategory";

const Categories = () => {
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await fetch(
                "https://used-product-sell-server-one.vercel.app/categories"
            );
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='text-center'>
                <div className='sm:text-2xl text-xl inline-block border-b-4 border-green-400 rounded px-4 mt-8 text-stromboli font-medium lg:mt-12 mb-12'>
                    <h1>Categories Item</h1>
                </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-12 border-3 mx-8">
                {categories.map((category, i) => (
                    <EachCategory key={i} category={category}></EachCategory>
                ))}
            </div>
        </div>
    );
};

export default Categories;