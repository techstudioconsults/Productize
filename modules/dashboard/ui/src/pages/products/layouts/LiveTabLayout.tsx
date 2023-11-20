import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { selectLiveProducts, useGetLiveProductsMutation } from "@productize-v1.0.0/modules/shared/redux";
import LiveTabActive from "../premium/LiveTabActive";
import LiveTab from "../empty/LiveTab";

const LiveTabLayout = () => {
    const [getLiveProducts] = useGetLiveProductsMutation();
    const liveProducts = useSelector(selectLiveProducts);

    const showLiveProducts = useCallback(async () => {
        try {
            await getLiveProducts(null).unwrap();
        } catch (error) {
            return error;
        }
    }, [getLiveProducts]);

    useEffect(() => {
        showLiveProducts();
    }, [showLiveProducts]);

    return liveProducts !== null ? <LiveTabActive products={liveProducts} /> : <LiveTab />;
};

export default LiveTabLayout;
