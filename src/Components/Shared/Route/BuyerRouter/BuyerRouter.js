import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../../Others/Loading/Loading";
import { AuthContext } from "../../../Pages/Context/AuthProvider";
import useAdmin from "../../../Pages/Hooks/UseAdmin";


const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [userInfo, isAdminLoading] = useAdmin(user?.email);

    // const location = useLocation();
    // state={{ from: location }}

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && userInfo[0].role === "buyer") {
        return children;
    }

    return <Navigate to="/login" replace></Navigate>;
};

export default BuyerRoute;