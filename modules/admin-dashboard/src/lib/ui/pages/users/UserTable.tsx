/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Avatar, Text, Stack, Checkbox, Box, Tag, Skeleton } from '@chakra-ui/react';
// import { Icon } from '@iconify/react';
// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { DashboardEmptyState } from '../../empty-states/AdminDashboardEmptyState';
import { useDate, useTime } from '@productize/hooks';
import { useGetAllUserMutation, selectAllUsers, selectPaginationMetaData } from '@productize/redux';
import { OnBoardingLoader, SharedButton } from '@productize/ui';

interface tableProps {
    draft?: boolean;
    live?: boolean;
    deleted?: boolean;
}

export const CustomerTable = ({ deleted }: tableProps) => {
    const [getAllUser, getAllUserStatus] = useGetAllUserMutation();
    const allProducts = useSelector(selectAllUsers);
    // const navigate = useNavigate();
    // const formatCurrency = useCurrency();
    const formatDate = useDate();
    const formatTime = useTime();
    const paginate = useSelector(selectPaginationMetaData);

    const tableHeader = [`User Name`, `User Email`, `Subscription Status`, `Date`].map((title) => {
        if (deleted && title === `Status`) {
            title = `...`;
        }
        if (title === `Product`) {
            return (
                <Th alignItems={`center`} py={3} key={title}>
                    <Flex gap={4} alignItems={`center`}>
                        <Checkbox size={`lg`} colorScheme="purple" defaultChecked />
                        {title}
                    </Flex>
                </Th>
            );
        } else {
            return (
                <Th py={3} key={title}>
                    {title}
                </Th>
            );
        }
    });
    const tableproduct = allProducts?.map((product: any) => {
        return (
            <Tr _hover={{ bgColor: `purple.100`, cursor: `pointer` }} key={product.id}>
                <Td>
                    {/* use navigate to tap into all row */}
                    <Flex gap={2} alignItems={`center`}>
                        {/* <Box onClick={(e) => e.stopPropagation()}>
                            <Checkbox size={`lg`} colorScheme="purple" />
                        </Box> */}
                        {/* <Avatar bgColor={`yellow.100`} src={product?.thumbnail} borderRadius={`8px`} w={`100px`} h={`64px`} /> */}
                        <Stack padding={3}>
                            <Text>{product?.name}</Text>
                        </Stack>
                    </Flex>
                </Td>
                <Td>
                    <Flex>{product?.email}</Flex>
                </Td>
                <Td>
                    {/* if show sale count is true */}
                    <Tag size={`lg`} colorScheme={product?.account_type === `free` ? `yellow` : `green`}>
                        {product?.account_type}
                    </Tag>
                </Td>
                <Td>
                    <Flex>{`
                    ${formatDate(product?.created_at)}
                    ${formatTime(product?.created_at)}
                    `}</Flex>
                </Td>
                {/* <Td>
                    <Flex hidden={deleted}>
                        <Tag size={`lg`} colorScheme={product?.status === `draft` ? `yellow` : `green`}>
                            {product?.status}
                        </Tag>
                    </Flex>
                </Td> */}
            </Tr>
        );
    });

    const handlePrevButton = async () => {
        try {
            await getAllUser({ link: paginate?.links?.prev }).unwrap();
        } catch (error) {
            console.log(error);
        }
    };
    const handleNextButton = async () => {
        try {
            await getAllUser({ link: paginate?.links?.next }).unwrap();
        } catch (error) {
            console.log(error);
        }
    };

    const showAllProducts = useCallback(async () => {
        try {
            await getAllUser(null).unwrap();
        } catch (error) {
            return error;
        }
    }, [getAllUser]);

    useEffect(() => {
        showAllProducts();
    }, [showAllProducts]);

    return (
        <>
            <TableContainer
                display={`flex`}
                flexDir={`column`}
                height={allProducts?.length ? `40rem` : `fit-Content`}
                justifyContent={`space-between`}
                overflowY={`auto`}
            >
                {getAllUserStatus.isLoading ? (
                    <OnBoardingLoader />
                ) : (
                    <Table size={`sm`} variant="simple">
                        {/* head */}
                        <Thead zIndex={1} pos={`sticky`} top={0}>
                            <Tr bgColor={`purple.100`} color={`grey.300`}>
                                {tableHeader}
                            </Tr>
                        </Thead>
                        {/* body */}
                        <Tbody color={`purple.300`}>{tableproduct}</Tbody>
                    </Table>
                )}
                {!allProducts?.length && !getAllUserStatus.isLoading && (
                    <Box my={10}>
                        <DashboardEmptyState
                            content={{
                                title: '',
                                desc: 'Product Table is Empty.',
                                img: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1700317427/productize/Illustration_4_pujumv.png`,
                            }}
                            textAlign={{ base: `center` }}
                            showImage
                        />
                    </Box>
                )}
            </TableContainer>
            {/* TABLE PAGINATION */}
            <Flex mt={4} gap={5} color={`grey.400`} alignItems={`center`} justifyContent={`space-between`} flexDir={{ base: `column-reverse`, lg: `row` }}>
                <Flex alignItems={`center`} justifyContent={`space-between`} flexDir={{ base: `column`, lg: `row` }} gap={{ lg: 60 }}>
                    <Box>
                        <Text>10 Entries per page </Text>
                    </Box>
                    <Box>
                        <Text>
                            Page {paginate?.meta?.current_page} of {paginate?.meta?.last_page}
                        </Text>
                    </Box>
                </Flex>
                <Stack w={{ base: `100%`, lg: `initial` }} justifyContent={`space-between`} direction={`row`}>
                    <SharedButton
                        btnExtras={{
                            leftIcon: `material-symbols:chevron-left`,
                            border: `1px solid #CFCFD0`,
                            onClick: handlePrevButton,
                            disabled: !paginate?.links?.prev,
                        }}
                        text={'Previous'}
                        width={'137px'}
                        height={'40px'}
                        bgColor={'transparent'}
                        textColor={'grey.400'}
                        borderRadius={'4px'}
                        fontSize={{ base: `sm`, md: `md` }}
                    />
                    <SharedButton
                        btnExtras={{
                            leftIcon: `material-symbols:chevron-right`,
                            border: `1px solid #CFCFD0`,
                            onClick: handleNextButton,
                            disabled: !paginate?.links?.next,
                        }}
                        text={'Next'}
                        width={'137px'}
                        height={'40px'}
                        bgColor={'transparent'}
                        textColor={'grey.400'}
                        borderRadius={'4px'}
                        fontSize={{ base: `sm`, md: `md` }}
                    />
                </Stack>
            </Flex>
        </>
    );
};
