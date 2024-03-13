import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Avatar, Text, Stack, Checkbox, Box, Tag } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DropdownActionDelete, DropdownActionDraft, DropdownActionLive } from '../DropdownAction';
import { useCurrency, useDate, useTime } from '@productize/hooks';
import { selectPaginationMetaData, useGetDeletedProductsMutation } from '@productize/redux';
import { SharedButton } from '@productize/ui';

interface tableProps {
    draft?: boolean;
    live?: boolean;
    deleted?: boolean;
    tableData: [];
}

export const DeletedTable = ({ draft, live, deleted, tableData }: tableProps) => {
    const navigate = useNavigate();
    const formatCurrency = useCurrency();
    const formatDate = useDate();
    const formatTime = useTime();
    const paginate = useSelector(selectPaginationMetaData);
    const [getDeletedProducts] = useGetDeletedProductsMutation();

    const tableHeader = [`Product`, `Price`, `Sales`, `Type`, `Status`, ''].map((title) => {
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
    const tableproduct = tableData?.map((product: any) => {
        return (
            <Tr _hover={{ bgColor: `purple.100`, cursor: `pointer` }} onClick={() => navigate(`/dashboard/products/${product.id}`)} key={product.id}>
                <Td>
                    {/* use navigate to tap into all row */}
                    <Flex gap={2} alignItems={`center`}>
                        <Box onClick={(e) => e.stopPropagation()}>
                            <Checkbox size={`lg`} colorScheme="purple" />
                        </Box>
                        <Avatar bgColor={`yellow.100`} src={product?.thumbnail} borderRadius={`8px`} w={`100px`} h={`64px`} />
                        <Stack>
                            <Text>{product?.title}</Text>
                            <Flex alignItems={`center`} color={`grey.400`}>
                                <Text className="tiny-text">PDF - 5.5MB</Text>
                                <Icon className="large-text" icon={`mdi:dot`} />
                                <Text className="tiny-text">{formatDate(product.created_at)}</Text>
                                <Icon className="large-text" icon={`mdi:dot`} />
                                <Text className="tiny-text">{formatTime(product?.created_at)}</Text>
                            </Flex>
                        </Stack>
                    </Flex>
                </Td>
                <Td>
                    <Flex>{formatCurrency(product?.price)}</Flex>
                </Td>
                <Td>
                    {/* if show sale count is true */}
                    <Flex>{product?.total_order}</Flex>
                </Td>
                <Td>
                    <Flex>{product?.product_type}</Flex>
                </Td>
                <Td>
                    <Flex hidden={deleted}>
                        <Tag size={`lg`} colorScheme={product?.status === `draft` ? `yellow` : `green`}>
                            {product?.status}
                        </Tag>
                    </Flex>
                </Td>
                <Td>
                    {/* there is a status bug here...call tobi later 🤒 */}
                    {product?.status === `draft` && !product?.deleted_at ? (
                        <DropdownActionDraft product={product} icon={`tabler:dots`} />
                    ) : product?.status === `published` ? (
                        <DropdownActionLive product={product} icon={`tabler:dots`} />
                    ) : product?.status === `deleted` || product?.deleted_at ? (
                        <DropdownActionDelete product={product} icon={`tabler:dots`} />
                    ) : null}
                </Td>
            </Tr>
        );
    });

    const handlePrevButton = async () => {
        try {
            await getDeletedProducts({ link: paginate?.links?.prev });
        } catch (error) {
            console.log(error);
        }
    };
    const handleNextButton = async () => {
        try {
            await getDeletedProducts({ link: paginate?.links?.next });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <TableContainer display={`flex`} flexDir={`column`} height={`40rem`} justifyContent={`space-between`} overflowY={`auto`}>
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
