import { Box, Flex, HStack, Skeleton, VStack, SimpleGrid } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { CustomersTableControl } from '../UserTableControl';
import { CustomerTable } from '../UserTable';
// import { DashboardEmptyState } from '../../../empty-states/AdminDashboardEmptyState';
import { useGetAllCustomersMutation } from '@productize/redux';
import { useAllProducts } from './UserService';
import { DataWidgetCard } from '../../../AdminDataWidget';

const UserActive = () => {
    const [isLoading, setLoading] = useState(true);
    const [getAllCustomers] = useGetAllCustomersMutation();
    // const allCustomers = useSelector(selectAllCustomers);
    // const isFilter = useSelector(selectIsCustomerFilter);
    const { userAnalytics, getUserAnalyticsStatus } = useAllProducts();

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

    // if (!allCustomers?.length) {
    //     return (
    //         <Box my={10}>
    //             <Box hidden={!isFilter} my={5}>
    //                 <Text fontWeight={`semibold`} fontSize={`lg`} my={5}>
    //                     {allCustomers?.length} Customers
    //                 </Text>
    //                 <CustomersTableControl />
    //             </Box>
    //             <DashboardEmptyState
    //                 content={{
    //                     title: '',
    //                     desc: isFilter ? `No Customer Found` : 'You do not have Customer activities yet.',
    //                     img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951005/productize/Illustration_oblvox_athyeh.png`,
    //                 }}
    //                 textAlign={{ base: `center` }}
    //                 showImage
    //             />
    //         </Box>
    //     );
    // }

    return (
        <>
            <Box my={5}>
                <SimpleGrid gap={4} my={4} columns={{ base: 1, sm: 2, lg: 4 }}>
                    <Skeleton isLoaded={!getUserAnalyticsStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title="Total Users" value={userAnalytics?.total_users} />
                        </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!getUserAnalyticsStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title="Total Subscribed Users" value={userAnalytics?.total_subscribed_users} />
                        </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!getUserAnalyticsStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title="Total Trial Users" value={userAnalytics?.total_trial_users} />
                        </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!getUserAnalyticsStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title="Conversion Rate" value={userAnalytics?.conversion_rate} />
                        </Box>
                    </Skeleton>
                </SimpleGrid>
                {/* <Text fontWeight={`semibold`} fontSize={`lg`} my={5}>
                    {allCustomers?.length} Customers
                </Text> */}
                <CustomersTableControl />
            </Box>
            <CustomerTable />
        </>
    );
};

export default UserActive;

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
