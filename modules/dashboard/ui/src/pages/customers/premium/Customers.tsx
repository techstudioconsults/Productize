import { Box, Text } from "@chakra-ui/react";
import { CustomerTable } from "../../../lib/tables/CustomerTable";
import { CustomersTableControl } from "../../../lib/tables/tableControls/CustomersTableControl";
import { selectAllCustomers, useGetAllCustomersMutation } from "@productize-v1.0.0/modules/shared/redux";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

const Customers = () => {
    const allCustomers = useSelector(selectAllCustomers);
    const [getAllCustomers] = useGetAllCustomersMutation();

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

    return (
        <>
            <Box my={5}>
                <Text fontWeight={`semibold`} fontSize={`lg`} my={5}>{allCustomers?.length} Customers</Text>
                <CustomersTableControl />
            </Box>
            <CustomerTable tableData={allCustomers} />
        </>
    );
};

export default Customers;
