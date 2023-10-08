import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { SharedButton } from '@productize/shared/ui';
import DateRangePicker from 'rsuite/esm/DateRangePicker';
import SelectPicker from 'rsuite/esm/SelectPicker';
import { DropdownAction } from './DropdownAction';

interface controlsProp {
  showRefreshBtn?: boolean;
}

export const TableControls = ({ showRefreshBtn }: controlsProp) => {
  const data = [
    `All Products`,
    `UX Design Fundamentals`,
    `Practical UI - User interface design book`,
    `The Future of Design Systems Conference 2023`,
    `Graphics Guide to Residential Design`,
  ].map((item) => ({ label: item, value: item }));
  return (
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
          <Box hidden={showRefreshBtn ? false : true}>
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
                // onClick: () => setEmptyState((prevState) => !prevState),
              }}
            />
          </Box>
          <Box>
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
          </Box>
        </Flex>
        <Box display={{ md: `none` }}>
          <DropdownAction icon={`zondicons:dots-horizontal-triple`} />
        </Box>
      </Box>
    </Flex>
  );
};
