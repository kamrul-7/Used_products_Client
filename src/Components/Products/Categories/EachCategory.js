import React from "react";
import { Link } from "react-router-dom";

const EachCategory = ({ category }) => {
    const { categoryName, img } = category;
    return (
        <div className="card w-full bg-base-100 border-2 hover:shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{categoryName}</h2>
                <div className="card-actions">
                    <Link
                        to={`categories/${categoryName}`}
                        className="text-white py-2 px-4 font-semibold rounded-md bg-emerald-800 mt-6 hover:bg-gray-800"
                    >
                        View Items
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EachCategory;
