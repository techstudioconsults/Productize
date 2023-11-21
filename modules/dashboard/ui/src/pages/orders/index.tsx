import { Box } from "@chakra-ui/react";
// import { EmptyState } from "../../lib/empty-states/EmptyState";
import NoOrders from "./NoOrders";
import ActiveOrders from "./ActiveOrders";
import useFetch from "./hooks/useFetch";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "@productize-v1.0.0/modules/shared/redux";

export const Orders = () => {
    const token = useSelector(selectCurrentToken);
    const { error, data: orders, loading } = useFetch("https://productize-api.techstudio.academy/api/orders", token);
    console.log("orders", orders);
    return <Box my="24px">{orders && orders?.data?.length > 0 ? <ActiveOrders orders={orders} /> : <NoOrders />}</Box>;
    //         desc: "Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.",
    //         img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696068934/productize/Illustration_3_g5iwpj.png`,
    //     }}
    //     textAlign={{ base: `center`, md: `start` }}
    //     showImage={true}
    //     maxW="100%"
    // /> */}
};
