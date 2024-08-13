/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Text, Stack, Avatar, Checkbox, Box, Tag, Skeleton } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { DashboardEmptyState } from '../../../empty-states/AdminDashboardEmptyState';
import { useCurrency, useDate, useTime } from '@productize/hooks';
import {
    selectAllUsers,
    selectPayoutHistory,
    selectpayoutPaginationMetaData,
    selectUserPaginationMetaData,
    useGetAllPayoutHistoryMutation,
} from '@productize/redux';
import { OnBoardingLoader, SharedButton } from '@productize/ui';

interface tableProps {
    draft?: boolean;
    live?: boolean;
    deleted?: boolean;
}

export const AdminPayoutTable = ({ deleted }: tableProps) => {
    const [getAllPayoutHistory, getAllPayoutHistoryStatus] = useGetAllPayoutHistoryMutation();
    const allProducts = useSelector(selectPayoutHistory);
    // const allProducts = useSelector(selectPayoutHistory);
    console.log('Payout History:', allProducts);
    // const navigate = useNavigate();
    const formatCurrency = useCurrency();
    const formatDate = useDate();
    const formatTime = useTime();
    const paginate = useSelector(selectpayoutPaginationMetaData);

    const tableHeader = [`Price`, `Bank Account`, `Period`].map((title) => {
        return (
            <Th py={3} key={title}>
                {title}
            </Th>
        );
    });
    const tableproduct = Array.isArray(allProducts)
        ? allProducts.map((earning: any) => {
              return (
                  <Tr _hover={{ bgColor: `purple.100` }} key={earning.id}>
                      <Td>
                          <Flex alignItems={`center`}>
                              <Text>{formatCurrency(earning.amount)}</Text>
                          </Flex>
                      </Td>
                      <Td py={5}>
                          <Flex alignItems={`center`} gap={5}>
                              <Avatar size={`xs`} name={earning.bank_name} />
                              <Text>{`${earning.bank_name} ${earning?.account?.number?.slice(0, 3)}****${earning?.account?.number?.slice(7)}`}</Text>
                          </Flex>
                      </Td>
                      <Td>
                          <Flex>{`
                      ${formatDate(earning?.created_at)}
                      ${formatTime(earning?.created_at)}
                      `}</Flex>
                      </Td>
                      {/* <Td>
                      <Flex>
                          <Tag
                              bg={earning.status === `pending` ? `yellow.200` : earning.status === `completed` ? `green.200` : `red.200`}
                              color={`grey.100`}
                              fontWeight={600}
                              size={`lg`}
                              fontSize={`sm`}
                          >
                              {earning?.status}
                          </Tag>
                      </Flex>
                  </Td> */}
                      {/* <Td>
                      <Flex>
                          <Tag bg={`grey.200`} color={`green.300`} fontWeight={600} size={`lg`} fontSize={`sm`}>
                              5%
                          </Tag>
                      </Flex>
                  </Td> */}
                  </Tr>
              );
          })
        : [];

    const handlePrevButton = async () => {
        try {
            await getAllPayoutHistory({ link: paginate?.links?.prev }).unwrap();
        } catch (error) {
            console.log(error);
        }
    };
    const handleNextButton = async () => {
        try {
            await getAllPayoutHistory({ link: paginate?.links?.next }).unwrap();
        } catch (error) {
            console.log(error);
        }
    };

    const showAllProducts = useCallback(async () => {
        try {
            await getAllPayoutHistory(null).unwrap();
        } catch (error) {
            return error;
        }
    }, [getAllPayoutHistory]);

    useEffect(() => {
        showAllProducts();
    }, [showAllProducts]);

    return (
        <>
            {/* <Skeleton isLoaded={!getProductsStatus.isLoading}>
                <CustomersTableControl />
            </Skeleton> */}
            <TableContainer
                display={`flex`}
                flexDir={`column`}
                height={allProducts?.length ? `40rem` : `fit-Content`}
                justifyContent={`space-between`}
                overflowY={`auto`}
            >
                {getAllPayoutHistoryStatus.isLoading ? (
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
                {!allProducts?.length && !getAllPayoutHistoryStatus.isLoading && (
                    <Box my={10}>
                        <DashboardEmptyState
                            content={{
                                title: '',
                                desc: 'Payout Table is Empty.',
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
