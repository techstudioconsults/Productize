import { Box, Text } from "@chakra-ui/react";
import { selectAllCustomers, useGetAllCustomersMutation } from "@productize-v1.0.0/modules/shared/redux";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { CustomersTableControl } from "../../../tables/tableControls/CustomersTableControl";
import { CustomerTable } from "../../../tables/CustomerTable";
import { OnBoardingLoader } from "@productize-v1.0.0/modules/shared/ui";
import { DashboardEmptyState } from "../../../empty-states/DashboardEmptyState";

const CustomersActive = () => {
    const [getAllCustomers, getAllCustomersStatus] = useGetAllCustomersMutation();
    const allCustomers = useSelector(selectAllCustomers);

    const showAllCustomers = useCallback(async () => {
        try {
            await getAllCustomers(null).unwrap();
        } catch (error) {
            return error;
        }
    }, [getAllCustomers]);

    useEffect(() => {
        showAllCustomers();
    }, [showAllCustomers]);

    if (getAllCustomersStatus.isLoading) {
        return <OnBoardingLoader />;
    }

    if (!allCustomers?.length) {
        return (
            <Box my={10}>
                <DashboardEmptyState
                    content={{
                        title: "",
                        desc: "You do not have Customer activities yet.",
                        img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951005/productize/Illustration_oblvox_athyeh.png`,
                    }}
                    textAlign={{ base: `center` }}
                    showImage
                />
            </Box>
        );
    }

    return (
        <>
            <Box my={5}>
                <Text fontWeight={`semibold`} fontSize={`lg`} my={5}>
                    {allCustomers?.length} Customers
                </Text>
                <CustomersTableControl />
            </Box>
            <CustomerTable tableData={allCustomers} />
        </>
    );
};

export default CustomersActive;
