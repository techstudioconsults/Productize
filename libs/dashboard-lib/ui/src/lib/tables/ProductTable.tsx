/* eslint-disable react-hooks/rules-of-hooks */
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Avatar,
  Text,
  Stack,
  Checkbox,
  Box,
  Tag,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import {
  DropdownActionDelete,
  DropdownActionDraft,
  DropdownActionLive,
} from '../DropdownAction';
import { useNavigate } from 'react-router-dom';
import { useCurrency, useDate, useTime } from '@productize/shared/hooks';

interface tableProps {
  draft?: boolean;
  live?: boolean;
  deleted?: boolean;
  tableData: [];
}

export const ProductTable = ({
  draft,
  live,
  deleted,
  tableData,
}: tableProps) => {
  const navigate = useNavigate();
  const formatCurrency = useCurrency();
  const formatDate = useDate();
  const formatTime = useTime();

  const tableHeader = [`Product`, `Price`, `Sales`, `Type`, `Status`, ''].map(
    (title) => {
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
    }
  );
  const tableContent = tableData?.map((content: any) => {
    return (
      <Tr
        _hover={{ bgColor: `purple.100`, cursor: `pointer` }}
        onClick={() => navigate(`/dashboard/products/${content.id}`)}
        key={content.id}
      >
        <Td>
          {/* use navigate to tap into all row */}
          <Flex gap={2} alignItems={`center`}>
            <Box onClick={(e) => e.stopPropagation()}>
              <Checkbox size={`lg`} colorScheme="purple" />
            </Box>
            <Avatar
              bgColor={`yellow.100`}
              src={content?.thumbnail}
              borderRadius={`8px`}
              w={`100px`}
              h={`64px`}
            />
            <Stack>
              <Text>{content?.title}</Text>
              <Flex alignItems={`center`} color={`grey.400`}>
                <Text className="tiny-text">PDF - 5.5MB</Text>
                <Icon className="large-text" icon={`mdi:dot`} />
                <Text className="tiny-text">
                  {formatDate(content.created_at)}
                </Text>
                <Icon className="large-text" icon={`mdi:dot`} />
                <Text className="tiny-text">
                  {formatTime(content?.created_at)}
                </Text>
              </Flex>
            </Stack>
          </Flex>
        </Td>
        <Td>
          <Flex>{formatCurrency(content?.price)}</Flex>
        </Td>
        <Td>
          {/* if show sale count is true */}
          <Flex>5</Flex>
        </Td>
        <Td>
          <Flex>{content?.product_type}</Flex>
        </Td>
        <Td>
          <Flex hidden={deleted}>
            <Tag
              size={`lg`}
              colorScheme={content?.status === `draft` ? `yellow` : `green`}
            >
              {content?.status}
            </Tag>
          </Flex>
        </Td>
        <Td>
          {content?.status === `draft` ? (
            <DropdownActionDraft icon={`tabler:dots`} />
          ) : content?.status === `live` ? (
            <DropdownActionLive icon={`tabler:dots`} />
          ) : (
            <DropdownActionDelete icon={`tabler:dots`} />
          )}
        </Td>
      </Tr>
    );
  });

  return (
    <TableContainer maxH={`40rem`} overflowY={`auto`}>
      <Table size={`sm`} variant="simple">
        {/* head */}
        <Thead zIndex={1} pos={`sticky`} top={0}>
          <Tr bgColor={`purple.100`} color={`grey.300`}>
            {tableHeader}
          </Tr>
        </Thead>
        {/* body */}
        <Tbody color={`purple.300`}>{tableContent}</Tbody>
      </Table>
    </TableContainer>
  );
};
