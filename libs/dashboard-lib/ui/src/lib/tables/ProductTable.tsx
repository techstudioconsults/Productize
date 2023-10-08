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

interface tableProps {
  draft?: boolean;
  live?: boolean;
  deleted?: boolean;
}

export const ProductTable = ({ draft, live, deleted }: tableProps) => {
  const navigate = useNavigate();

  const showDropDown = draft ? (
    <DropdownActionDraft icon={`tabler:dots`} />
  ) : live ? (
    <DropdownActionLive icon={`tabler:dots`} />
  ) : (
    <DropdownActionDelete icon={`tabler:dots`} />
  );

  const tableHeader = [`Product`, `Price`, `Sales`, `Type`, `Status`, ''].map(
    (title) => {
      if (deleted && title === `Status`) {
        return title = `.`;
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
  const tableContent = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((content) => {
    return (
      <Tr
        _hover={{ bgColor: `purple.100`, cursor: `pointer` }}
        onClick={() => navigate(`/products/282387989839753`)}
        key={content}
      >
        <Td>
          {/* use navigate to tap into all row */}
          <Flex gap={2} alignItems={`center`}>
            <Box onClick={(e) => e.stopPropagation()}>
              <Checkbox size={`lg`} colorScheme="purple" />
            </Box>
            <Avatar
              bgColor={`yellow.100`}
              src="https://res.cloudinary.com/dkszgtapy/image/upload/v1692269980/learning_atvahc.gif"
              borderRadius={`8px`}
              w={`100px`}
              h={`64px`}
            />
            <Stack>
              <Text>UX Design Fundamentals</Text>
              <Flex alignItems={`center`} color={`grey.400`}>
                <Text className="tiny-text">PDF - 5.5MB</Text>
                <Icon className="large-text" icon={`mdi:dot`} />
                <Text className="tiny-text">18 Mar, 2023</Text>
                <Icon className="large-text" icon={`mdi:dot`} />
                <Text className="tiny-text">11:09AM</Text>
              </Flex>
            </Stack>
          </Flex>
        </Td>
        <Td>
          <Flex>N 5.500</Flex>
        </Td>
        <Td>
          <Flex>5</Flex>
        </Td>
        <Td>
          <Flex>Digital Products</Flex>
        </Td>
        <Td>
          <Flex hidden={deleted}>
            {draft ? (
              <Tag size={`lg`} colorScheme="yellow">
                Draft
              </Tag>
            ) : (
              <Tag size={`lg`} colorScheme="green">
                Live
              </Tag>
            )}
          </Flex>
        </Td>
        <Td>{showDropDown}</Td>
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
