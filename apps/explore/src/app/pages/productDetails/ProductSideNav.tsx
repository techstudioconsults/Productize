import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { SharedButton } from '@productize/shared/ui';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductSideNav = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Flex
          bg={`purple.100`}
          justifyContent={`space-between`}
          p={2}
          borderRadius={`4px`}
        >
          <Text fontWeight={500}>Sold</Text>
          <Text>20</Text>
        </Flex>
        <Box my={4}>
          <Text color={`grey.800`} fontSize={`22px`} fontWeight={600}>
            ₦3,000
          </Text>
        </Box>
        <Box>
          <Flex flexDir={`column`} w={`100%`} gap={4}>
            <SharedButton
              text={'Add to cart'}
              width={`100%`}
              height={'38px'}
              bgColor={'purple.200'}
              textColor={'white'}
              borderRadius={'4px'}
              fontSize={{ base: `sm`, xl: `md` }}
            />
            <Link to={`/explore/product/buy`}>
              <SharedButton
                border="1px solid #6D5DD3"
                text={'Buy Now'}
                width={`100%`}
                height={'38px'}
                bgColor={'white'}
                textColor={'purple.200'}
                borderRadius={'4px'}
                fontSize={{ base: `sm`, xl: `md` }}
              />
            </Link>
          </Flex>
        </Box>
        <Box my={10}>
          <Text fontWeight={600}>The product includes</Text>
          <Divider my={3} />
          <Stack gap={4}>
            <Flex
              color={`grey.500`}
              fontSize={`sm`}
              alignItems={`center`}
              justifyContent={`space-between`}
            >
              <Text>Format</Text>
              <Text>PDF</Text>
            </Flex>
            <Flex
              color={`grey.500`}
              fontSize={`sm`}
              alignItems={`center`}
              justifyContent={`space-between`}
            >
              <Text>File size</Text>
              <Text>3.8MB</Text>
            </Flex>
            <Flex
              color={`grey.500`}
              fontSize={`sm`}
              alignItems={`center`}
              justifyContent={`space-between`}
            >
              <Text>Articles</Text>
              <Text>7</Text>
            </Flex>
            <Flex
              color={`grey.500`}
              fontSize={`sm`}
              alignItems={`center`}
              justifyContent={`space-between`}
            >
              <Text>Downloadable recourses</Text>
              <Text>4</Text>
            </Flex>
          </Stack>
        </Box>
        <Flex fontWeight={600} alignItems={`center`} gap={5}>
          <Text>Share</Text>
          <Text>Give as a gift</Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProductSideNav;
