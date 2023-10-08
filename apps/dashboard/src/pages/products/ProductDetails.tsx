import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { DashboardTable, DataWidgetCard } from '@productize/dashboard-lib/ui';
import { SharedButton } from '@productize/shared/ui';
import React from 'react';

const ProductDetails = () => {
  return (
    <Box my={8}>
      {/* row 1 */}
      <Flex
        flexDir={{ base: `column`, md: `row` }}
        justifyContent={`space-between`}
        alignItems={{ base: `flex-start`, md: `center` }}
        gap={4}
      >
        <Flex w={`100%`} gap={8} alignItems={`center`}>
          <Box>
            <Image
              src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1696086766/productize/Productize-iconset/Property_2_Arrow-left_kafkjg.svg`}
            />
          </Box>
          <Text as={`h6`}>Product Details</Text>
        </Flex>
        <Flex w={`100%`} gap={4} justifyContent={`flex-end`}>
          <SharedButton
            btnExtras={{
              border: `1px solid red`,
            }}
            text={'Delete'}
            width={'fit-content'}
            height={'40px'}
            bgColor={'transparent'}
            textColor={'red.200'}
            borderRadius={'4px'}
            fontSize={{ base: `sm`, md: `md` }}
          />
          <SharedButton
            text={'Unpublish to draft'}
            width={'fit-content'}
            height={'40px'}
            bgColor={'purple.200'}
            textColor={'grey.100'}
            borderRadius={'4px'}
            fontSize={{ base: `sm`, md: `md` }}
          />
        </Flex>
      </Flex>
      {/* row 2 */}
      <Box mt={8} mb={4} color={`purple.300`}>
        <Text as={`h6`}>Black Cloud Kitchen Bucket Hat</Text>
        <Flex
          flexDir={{ base: `column`, xl: `row` }}
          borderBlock={`1px solid #EFEFEF`}
          gap={{ base: 8, xl: 32 }}
          py={8}
          alignItems={{ base: `flex-start`, xl: `center` }}
          my={2}
        >
          <Stack gap={2}>
            <Text>Publish Date</Text>
            <Text>12th June, 2018</Text>
          </Stack>
          <Stack gap={2}>
            <Text>Price</Text>
            <Text>NGN 8,700.00</Text>
          </Stack>
          <Stack gap={2}>
            <Text>Product link</Text>
            <Flex gap={2} alignItems={`center`}>
              <Text>UX Design Fundamentals.com</Text>
              <Icon color="grey" icon={`ph:copy-simple-light`} />
            </Flex>
          </Stack>
          <Stack gap={2}>
            <Text>Status</Text>
            <Tag colorScheme="green" size={`lg`}>
              Live
            </Tag>
          </Stack>
        </Flex>
      </Box>
      {/* row3 */}
      {/* grid cards */}
      <Box>
        <SimpleGrid gap={4} columns={{ base: 1, md: 3 }}>
          <Box>
            <DataWidgetCard showIcon={false} title={'Viewed'} value={12} />
          </Box>
          <Box>
            <DataWidgetCard showIcon={false} title={'Total Order'} value={3} />
          </Box>
          <Box>
            <DataWidgetCard
              showIcon={false}
              title={'Total Sales'}
              value={`NGN 26,100.00`}
            />
          </Box>
        </SimpleGrid>
        <Box mt={8}>
          <DashboardTable />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;
