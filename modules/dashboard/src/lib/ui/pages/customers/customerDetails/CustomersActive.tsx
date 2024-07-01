import { Box, Flex, HStack, Skeleton, Text, VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CustomersTableControl } from '../customerTable/CustomersTableControl';
import { CustomerTable } from '../customerTable/CustomerTable';
import { DashboardEmptyState } from '../../../empty-states/DashboardEmptyState';
import { selectAllCustomers, selectIsCustomerFilter, useGetAllCustomersMutation } from '@productize/redux';

const CustomersActive = () => {
    const [isLoading, setLoading] = useState(true);
    const [getAllCustomers] = useGetAllCustomersMutation();
    const allCustomers = useSelector(selectAllCustomers);
    const isFilter = useSelector(selectIsCustomerFilter);

    const showAllCustomers = useCallback(async () => {
        try {
            const res = await getAllCustomers(null).unwrap();
            if (res.data) {
                setLoading(false);
            }
        } catch (error) {
            return error;
        }
    }, [getAllCustomers]);

    useEffect(() => {
        showAllCustomers();
    }, [showAllCustomers]);

    if (isLoading) {
        return <CustomersSkeleton />;
    }

    if (!allCustomers?.length) {
        return (
            <Box my={10}>
                <Box hidden={!isFilter} my={5}>
                    <Text fontWeight={`semibold`} fontSize={`lg`} my={5}>
                        {allCustomers?.length} Customers
                    </Text>
                    <CustomersTableControl />
                </Box>
                <DashboardEmptyState
                    content={{
                        title: '',
                        desc: isFilter ? `No Customer Found` :'You do not have Customer activities yet.',
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

const CustomersSkeleton = () => {
    return (
        <Box p={5} mt={5}>
            <Flex display={{ base: `none`, sm: `flex` }} justify="space-between" mb={6}>
                <HStack spacing={4}>
                    <Skeleton borderRadius={8} height="40px" width="240px" />
                    <Skeleton borderRadius={8} height="40px" width="120px" />
                    <Skeleton borderRadius={8} height="40px" width="40px" />
                </HStack>
                <HStack spacing={4}>
                    <Skeleton borderRadius={8} height="40px" width="120px" />
                </HStack>
            </Flex>
            <VStack>
                <Skeleton borderRadius={8} height="40px" width="100%" />
                <Skeleton borderRadius={8} height="40px" width="100%" />
                <Skeleton borderRadius={8} height="40px" width="100%" />
                <Skeleton borderRadius={8} height="40px" width="100%" />
                <Skeleton borderRadius={8} height="40px" width="100%" />
                <Skeleton borderRadius={8} height="40px" width="100%" />
            </VStack>
        </Box>
    );
};
