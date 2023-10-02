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
  DataWidgetCard,
} from '@productize/dashboard-lib/ui';
import { SharedButton } from '@productize/shared/ui';
import { DateRangePicker, SelectPicker } from 'rsuite';

const ActiveUserPage = () => {
  const data = [
    `All Products`,
    `UX Design Fundamentals`,
    `Practical UI - User interface design book`,
    `The Future of Design Systems Conference 2023`,
    `Graphics Guide to Residential Design`,
  ].map((item) => ({ label: item, value: item }));

  return (
    <Box my={8}>
      {/* dropdown controls and buttons CTAs */}
      <Flex
        alignItems={{ md: `center` }}
        justifyContent={`space-between`}
        gap={4}
      >
        <Flex
          w={{ base: `100%`, md: `fit-content` }}
          flexDir={{ base: `column`, md: `row` }}
          gap={4}
          alignItems={{ base: `flex-start`, md: `center` }}
        >
          <Box w={`100%`}>
            <DateRangePicker
              placeholder={`15 Feb, 2023 - 22 Feb, 2023`}
              size="lg"
              character="-"
              style={{ width: `100%` }}
            />
          </Box>
          <Box w={`100%`}>
            <SelectPicker
              style={{ width: `100%` }}
              placeholder={`All Products`}
              size="lg"
              data={data}
            />
          </Box>
        </Flex>
        {/* dots and buttons */}
        <Box>
          <Flex
            display={{ base: `none`, md: `flex` }}
            gap={4}
            alignItems={`center`}
          >
            <SharedButton
              text={'Refresh'}
              width={'fit-content'}
              height={'40px'}
              bgColor={'transparent'}
              textColor={'purple.200'}
              borderRadius={'4px'}
              fontSize={{ base: `sm`, md: `md` }}
              btnExtras={{
                border: `1px solid #6D5DD3`,
                leftIcon: `basil:refresh-outline`,
              }}
            />
            <SharedButton
              text={'Export'}
              width={'fit-content'}
              height={'40px'}
              bgColor={'transparent'}
              textColor={'purple.200'}
              borderRadius={'4px'}
              fontSize={{ base: `sm`, md: `md` }}
              btnExtras={{
                border: `1px solid #6D5DD3`,
                leftIcon: `solar:export-line-duotone`,
              }}
            />
          </Flex>
          <Box display={{ md: `none` }}>
            <Menu>
              <MenuButton
                border={`none`}
                as={IconButton}
                aria-label="Options"
                icon={<Icon icon={`zondicons:dots-horizontal-triple`} />}
                variant="outlined"
              />
              <MenuList zIndex={999}>
                <MenuItem>Export data as</MenuItem>
                <MenuItem>CSV</MenuItem>
                <MenuItem>PDF</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Flex>
      {/* grid cards */}
      <Box>
        <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 2 }}>
          <Box>
            <DataWidgetCard
              showIcon
              bgImg="https://res.cloudinary.com/dkszgtapy/image/upload/v1696272023/productize/Data_widget_1_bqcsji.png"
              title={'Total Sales'}
              value={'NGN 0.00'}
            />
          </Box>
          <Box>
            <DataWidgetCard
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
          <DashboardEmptyState
            content={{
              title: '',
              desc: 'You do not have any sales activities yet.',
              img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1695984929/productize/Illustration_oblvox.png`,
            }}
            textAlign={{ base: `center` }}
            showImage
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ActiveUserPage;
