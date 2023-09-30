import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';
import { SharedButton } from '@productize/shared/ui';
import { ProductCards } from './dashboard-product/allProducts/ProductCards';
import { ProductBanner } from './ProductBanner';
export const DashboardTab = () => {
  // const tabStyle = {}
  const activeStateStyle = {
    borderBottom: `2px solid #6D5DD3`,
    fontWeight: 600,
    color: `grey.800`,
  };
  return (
    <Tabs size={`sm`}>
      <Box display={{ base: `flex`, md: `none` }} justifyContent={`flex-end`}>
        <SharedButton
          text={'New Product'}
          leftIcon={`ei:plus`}
          width={'fit-content'}
          height={'40px'}
          bgColor={'purple.200'}
          textColor={'white'}
          borderRadius={'4px'}
          fontSize={{ base: `sm`, md: `sm` }}
        />
      </Box>
      <TabList justifyContent={`space-between`} color={`grey.400`}>
        <Flex>
          <Tab _selected={activeStateStyle} py={6}>
            All Products
          </Tab>
          <Tab _selected={activeStateStyle} py={6}>
            Live
          </Tab>
          <Tab _selected={activeStateStyle} py={6}>
            Drafts
          </Tab>
          <Tab _selected={activeStateStyle} py={6}>
            Deleted
          </Tab>
        </Flex>
        <Box display={{ base: `none`, md: `initial` }}>
          <SharedButton
            text={'New Product'}
            leftIcon={`ei:plus`}
            width={'fit-content'}
            height={'40px'}
            bgColor={'purple.200'}
            textColor={'white'}
            borderRadius={'4px'}
            fontSize={{ base: `sm`, md: `sm` }}
          />
        </Box>
      </TabList>

      <TabPanels>
        <TabPanel px={0}>
          <Flex gap={12} justifyContent={`space-between`}>
            <Box w={`100%`}>
              <ProductCards
                img={
                  'https://res.cloudinary.com/dkszgtapy/image/upload/v1696066139/productize/21_pqfpr8.png'
                }
                bgColor={'coral.200'}
              />
            </Box>
            <Box w={`100%`} display={{ base: `none`, md: `initial` }}>
              <ProductCards
                img={
                  'https://res.cloudinary.com/dkszgtapy/image/upload/v1696066139/productize/Clip_path_group_izpz73.png'
                }
                bgColor={'coral.200'}
              />
            </Box>
            <Box w={`100%`} display={{ base: `none`, md: `initial` }}>
              <ProductCards
                img={
                  'https://res.cloudinary.com/dkszgtapy/image/upload/v1696066139/productize/Clip_path_group_1_xjfqpt.png'
                }
                bgColor={'coral.200'}
              />
            </Box>
          </Flex>
          <Box my={4}>
            <ProductBanner
              content={{
                title: 'Upgrade your plan to create product',
                desc: 'Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.',
              }}
              textAlign={{ base: `center` }}
              showImage={false}
            />
          </Box>
        </TabPanel>
        <TabPanel px={0}>
          <Box>
            <ProductBanner
              content={{
                title: 'You’re yet to publish a product.',
                desc: 'Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.',
                img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696068934/productize/Illustration_3_g5iwpj.png`,
              }}
              textAlign={{ base: `center`, md: `start` }}
              showImage={true}
              maxW="100%"
            />
          </Box>
        </TabPanel>
        <TabPanel px={0}>
          <Box>
            <ProductBanner
              content={{
                title: 'Upgrade your plan to create a plan',
                desc: 'Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.',
                img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696068934/productize/Illustration_3_g5iwpj.png`,
              }}
              textAlign={{ base: `center`, md: `start` }}
              showImage={true}
              maxW="100%"
            />
          </Box>
        </TabPanel>
        <TabPanel px={0}>
          <Box>
            <ProductBanner
              content={{
                title: 'Upgrade your plan to create a plan',
                desc: 'Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.',
                img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696068934/productize/Illustration_3_g5iwpj.png`,
              }}
              textAlign={{ base: `center`, md: `start` }}
              showImage={true}
              maxW="100%"
            />
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
