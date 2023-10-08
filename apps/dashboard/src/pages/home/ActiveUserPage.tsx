import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  SimpleGrid,
  Text,
  IconButton,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import {
  DashboardEmptyState,
  DashboardTable,
  DataWidgetCard,
  TableControls,
} from '@productize/dashboard-lib/ui';
import { SharedButton } from '@productize/shared/ui';
import { useState } from 'react';
import { DateRangePicker, SelectPicker } from 'rsuite';

const ActiveUserPage = () => {
  const [emptyState, setEmptyState] = useState(false);
  const data = [
    `All Products`,
    `UX Design Fundamentals`,
    `Practical UI - User interface design book`,
    `The Future of Design Systems Conference 2023`,
    `Graphics Guide to Residential Design`,
  ].map((item) => ({ label: item, value: item }));

  return (
    <Box my={8}>
      {/* dropdown filters and buttons Controls */}
      <TableControls showRefreshBtn />
      {/* grid cards */}
      <Box>
        <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 2 }}>
          <Box>
            <DataWidgetCard
              tmy={2}
              bmt={4}
              showIcon
              bgImg="https://res.cloudinary.com/dkszgtapy/image/upload/v1696272023/productize/Data_widget_1_bqcsji.png"
              title={'Total Sales'}
              value={'NGN 0.00'}
            />
          </Box>
          <Box>
            <DataWidgetCard
              tmy={2}
              bmt={4}
              showIcon
              bgImg="https://res.cloudinary.com/dkszgtapy/image/upload/v1696272017/productize/Data_widget_2_fwd9pa.png"
              title={'Total Revenue'}
              value={'NGN 0.00'}
            />
          </Box>
        </SimpleGrid>
        <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 3 }}>
          <Box>
            <DataWidgetCard showIcon={false} title={'New Order'} value={0} />
          </Box>
          <Box>
            <DataWidgetCard
              showIcon={false}
              title={'New Order Revenue'}
              value={'NGN 0.00'}
            />
          </Box>
          <Box>
            <DataWidgetCard
              showIcon={false}
              title={'Total Products'}
              value={0}
            />
          </Box>
        </SimpleGrid>
      </Box>
      {/* empty state */}
      <Box my={10}>
        <Text as={`h6`}>Sales</Text>
        <Box mt={4}>
          {emptyState ? (
            <DashboardEmptyState
              content={{
                title: '',
                desc: 'You do not have any sales activities yet.',
                img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1695984929/productize/Illustration_oblvox.png`,
              }}
              textAlign={{ base: `center` }}
              showImage
            />
          ) : (
            <DashboardTable />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ActiveUserPage;
