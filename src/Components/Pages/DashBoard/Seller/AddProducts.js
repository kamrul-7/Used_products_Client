import React, { useContext } from "react";
import toast from "react-hot-toast";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const date = format(new Date(), "PP");
    const navigate = useNavigate();
    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const categoryName = form.categoryName.value;
        const Seller = form.name.value;
        const condition = form.condition.value;
        const img = form.img.value;
        const location = form.location.value;
        const Resale = form.resalePrice.value;
        const Price = form.orginalPrice.value;
        const Use = form.yearsOfUse.value;
        const time = date;
        const sellerMail = form.email.value;
        const sold = false;
        const advertised = false;
        const reported = false;
        const contact = form.phone.value;
        const description = form.description.value;

        const product = {
            productName,
            categoryName,
            img,
            location,
            Resale,
            Price,
            Use,
            time,
            sellerMail,
            sold,
            advertised,
            reported,
            condition,
            phoneNumber: contact,
            description,
            Seller
        };

        console.log(product);

        fetch("https://used-product-sell-server-one.vercel.app/products", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.acknowledged) {
                    toast.success("Product Added Successfully");
                    navigate("/dashboard/myproducts");
                } else {
                    toast.error(data.message);
                }
            });
    };
    return (
        <>
            <div className="">
                <h2 className="my-5 text-center text-3xl font-semibold">
                    Add a Product
                </h2>
                <div className="card rounded-lg">
                    <form
                        onSubmit={handleAddProduct}
                        className="grid grid-cols-1 gap-3 mt-10 w-96 ml-56"
                    >
                        <input
                            name="productName"
                            type="text"
                            placeholder="productName"
                            className="input w-full input-bordered px-2 rounded-md py-1 bg-white"
                        />
                        <select
                            className="select select-bordered w-full px-2 rounded-md py-1 bg-white"
                            defaultValue={"Category"}
                            name="categoryName"
                        >
                            <option disabled value="Category">
                                Category
                            </option>
                            <option value="Fingerprint scanners" defaultValue="Fingerprint scanners">
                                Fingerprint scanners
                            </option>
                            <option value="Iris Recognition">Iris Recognition</option>
                            <option value="Hand geometry readers">Hand geometry readers</option>
                            <option value="Signature recognition systems">Signature recognition systems</option>
                        </select>

                        <input
                            name="img"
                            type="text"
                            placeholder="Image URL"
                            className="input w-full input-bordered px-2 rounded-md py-1 bg-white"
                        />

                        <input
                            name="location"
                            type="text"
                            placeholder="Meeting Location"
                            className="input w-full input-bordered px-2 rounded-md py-1 bg-white"
                        />

                        <input
                            name="resalePrice"
                            type="text"
                            placeholder="Resell Price"
                            className="input w-full input-bordered px-2 rounded-md py-1 bg-white"
                        />
                        <input
                            name="orginalPrice"
                            type="text"
                            placeholder="Orginal Price"
                            className="input w-full input-bordered px-2 rounded-md py-1 bg-white"
                        />
                        <input
                            name="yearsOfUse"
                            type="text"
                            placeholder="Years of Use"
                            className="input w-full input-bordered px-2 rounded-md py-1 bg-white"
                        />

                        <input
                            name="time"
                            type="text"
                            defaultValue={date}
                            disabled
                            placeholder="Time"
                            className="input w-full input-bordered px-2 rounded-md py-1 bg-white"
                        />
                        <input
                            name="email"
                            type="email"
                            defaultValue={user?.email}
                            disabled
                            placeholder="Email Address"
                            className="input w-full input-bordered px-2 rounded-md py-1 bg-white"
                        />
                        <input
                            name="name"
                            type="name"
                            defaultValue={user?.displayName}
                            disabled
                            placeholder="Email Address"
                            className="input w-full input-bordered px-2 rounded-md py-1 bg-white"
                        />
                        <select
                            className="select select-bordered w-full px-2 rounded-md py-1 bg-white"
                            defaultValue={"Condition"}
                            name="condition"
                        >
                            <option value={"Condition"} disabled>
                                Condition
                            </option>
                            <option value="Good">Good</option>
                            <option value="Excellent">Excellent</option>
                            <option value="Fair" defaultValue="Fair">
                                Outstanding
                            </option>
                        </select>

                        <input
                            name="phone"
                            type="text"
                            placeholder="Phone Number"
                            className="input w-full input-bordered px-2 rounded-md py-1 bg-white"
                        />

                        <input
                            name="description"
                            type="text"
                            placeholder="Description"
                            className="input w-full input-bordered px-2 rounded-md py-1 bg-white"
                        />

                        <input
                            className="bg-emerald-800 px-4 text-white rounded-md py-2 mb-12"
                            type="submit"
                            value="Submit"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddProduct;