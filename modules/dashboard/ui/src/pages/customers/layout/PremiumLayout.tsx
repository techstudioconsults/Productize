import React, { useCallback, useEffect } from "react";
import { DashboardEmptyState } from "../../../lib/empty-states/DashboardEmptyState";
import { selectAllProducts, useGetAllProductsMutation } from "@productize-v1.0.0/modules/shared/redux";
import { useSelector } from "react-redux";
import Customers from "../premium/Customers";

const PremiumLayout = () => {
    const [getAllProducts] = useGetAllProductsMutation();
    const allProducts = useSelector(selectAllProducts);

    const showAllProducts = useCallback(async () => {
        try {
            await getAllProducts(null).unwrap();
        } catch (error) {
            return error;
        }
    }, [getAllProducts]);

    useEffect(() => {
        showAllProducts();
    }, [showAllProducts]);

    return allProducts !== null ? (
        <Customers />
    ) : (
        // empty state
        <DashboardEmptyState
            content={{
                title: "",
                desc: "You do not have Customer activities yet.",
                img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1700317427/productize/Illustration_4_pujumv.png`,
            }}
            textAlign={{ base: `center` }}
            showImage
        />
    );
};

export default PremiumLayout;
