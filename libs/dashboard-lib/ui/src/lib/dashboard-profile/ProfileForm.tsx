import {
  Box,
  Divider,
  Flex,
  FormControl,
  Image,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  Center,
  InputRightElement,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { SharedButton } from '@productize/shared/ui';
import React from 'react';

export const ProfileForm = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl>
      {/* grid one */}
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem colSpan={{ base: 12, md: 5 }}>
          <Text
            textAlign={{ base: `center`, md: `initial` }}
            color={`purple.300`}
            as={`h5`}
          >
            Profile Information
          </Text>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 7 }}>
          <Box mb={4}>
            <FormControl>
              <FormLabel color={`purple.300`} fontWeight={600}>
                Full name
              </FormLabel>
              <Input
                bgColor={`grey.200`}
                _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                _placeholder={{ color: `grey.400` }}
                placeholder="Enter Your Name"
                variant={`filled`}
                size={`lg`}
              />
            </FormControl>
          </Box>
          <Box mb={4}>
            <FormControl>
              <FormLabel color={`purple.300`} fontWeight={600}>
                Username
              </FormLabel>
              <Input
                bgColor={`grey.200`}
                _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                _placeholder={{ color: `grey.400` }}
                placeholder="Enter Username"
                variant={`filled`}
                size={`lg`}
              />
            </FormControl>
          </Box>
          <Box mb={4}>
            <FormControl>
              <FormLabel color={`purple.300`} fontWeight={600}>
                Email
              </FormLabel>
              <Flex mb={1} justifyContent={`space-between`}>
                <Text color={`grey.400`} className="tiny-text">
                  This email is linked to your account
                </Text>
                <Text color={`purple.200`} className="tiny-text">
                  Change Account Email
                </Text>
              </Flex>
              <Input
                bgColor={`grey.200`}
                _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                _placeholder={{ color: `grey.400` }}
                placeholder="example@gmail.com"
                variant={`filled`}
                size={`lg`}
              />
            </FormControl>
          </Box>
          <Box mb={4}>
            <FormControl>
              <FormLabel color={`purple.300`} fontWeight={600}>
                Contact number
              </FormLabel>
              <InputGroup size={`lg`}>
                <InputLeftElement color={`green`} pointerEvents="none">
                  <Icon icon={`material-symbols:check`} />
                </InputLeftElement>
                <Input
                  bgColor={`grey.200`}
                  _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                  _placeholder={{ color: `grey.400` }}
                  variant={`filled`}
                  type="tel"
                  placeholder="Enter number"
                />
              </InputGroup>
            </FormControl>
          </Box>
          <Box mb={4}>
            <FormControl>
              <FormLabel color={`purple.300`} fontWeight={600}>
                Bio
              </FormLabel>
              <Textarea
                bgColor={`grey.200`}
                _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                _placeholder={{ color: `grey.400` }}
                variant={`filled`}
                placeholder="Follow me to unlock your potential with my products."
              />
            </FormControl>
          </Box>
          <Divider mb={8} />
        </GridItem>
      </Grid>
      {/* grid two */}
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem colSpan={{ base: 12, md: 5 }}>
          <Text
            textAlign={{ base: `center`, md: `initial` }}
            color={`purple.300`}
            as={`h5`}
          >
            Upload Logo
          </Text>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 7 }}>
          <Box mb={4}>
            <FormControl>
              <FormLabel color={`purple.300`} fontWeight={600}>
                Logo
              </FormLabel>
              <Box>
                <Center
                  borderRadius={`4px`}
                  bgColor={`yellow.100`}
                  boxSize={`120px`}
                >
                  <Image
                    src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1696084137/productize/Star_6_alusuk.png`}
                    alt={`img`}
                  />
                </Center>
                <Input
                  hidden
                  type="file"
                  bgColor={`grey.200`}
                  _focus={{ bgColor: `grey.300`, color: `grey.800` }}
                  _placeholder={{ color: `grey.400` }}
                  placeholder="Enter Your Name"
                  variant={`filled`}
                  size={`lg`}
                />
              </Box>
              <Text className="small-text" color={`grey.400`}>
                Your logo will be visible next to your name in your Gumroad
                profile and product pages. Your image should be at least
                200x200px and must be in JPG or PNG format.
              </Text>
            </FormControl>
          </Box>
          <Divider mb={8} />
        </GridItem>
      </Grid>
      {/* grid three */}
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem colSpan={{ base: 12, md: 5 }}>
          <Text
            textAlign={{ base: `center`, md: `initial` }}
            color={`purple.300`}
            as={`h5`}
          >
            Social Links
          </Text>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 5 }}>
          <Box mb={4}>
            <FormControl>
              <FormLabel color={`purple.300`} fontWeight={600}>
                Twitter
              </FormLabel>
              <InputGroup size="lg">
                <Input
                  pr="4.5rem"
                  bgColor={`grey.200`}
                  _focus={{ bgColor: `grey.200`, color: `grey.800` }}
                  _placeholder={{ color: `grey.400` }}
                  placeholder="Enter username"
                  variant={`filled`}
                />
                <InputRightElement>
                  <Center
                    cursor={`pointer`}
                    bgColor={`grey.300`}
                    borderRadius={`100%`}
                    boxSize={`1rem`}
                    color={`grey.100`}
                  >
                    <Icon icon={`system-uicons:close`} />
                  </Center>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Box>
          <Box mb={4}>
            <FormControl>
              <FormLabel color={`purple.300`} fontWeight={600}>
                Facebook
              </FormLabel>
              <InputGroup size="lg">
                <Input
                  pr="4.5rem"
                  bgColor={`grey.200`}
                  _focus={{ bgColor: `grey.200`, color: `grey.800` }}
                  _placeholder={{ color: `grey.400` }}
                  placeholder="Enter username"
                  variant={`filled`}
                />
                <InputRightElement>
                  <Center
                    cursor={`pointer`}
                    bgColor={`grey.300`}
                    borderRadius={`100%`}
                    boxSize={`1rem`}
                    color={`grey.100`}
                  >
                    <Icon icon={`system-uicons:close`} />
                  </Center>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Box>
          <Box mb={4}>
            <FormControl>
              <FormLabel color={`purple.300`} fontWeight={600}>
                Youtube
              </FormLabel>
              <InputGroup size="lg">
                <Input
                  pr="4.5rem"
                  bgColor={`grey.200`}
                  _focus={{ bgColor: `grey.200`, color: `grey.800` }}
                  _placeholder={{ color: `grey.400` }}
                  placeholder="Enter username"
                  variant={`filled`}
                />
                <InputRightElement>
                  <Center
                    cursor={`pointer`}
                    bgColor={`grey.300`}
                    borderRadius={`100%`}
                    boxSize={`1rem`}
                    color={`grey.100`}
                  >
                    <Icon icon={`system-uicons:close`} />
                  </Center>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Box>
          <Flex gap={4} mt={12}>
            <SharedButton
              text={'Cancel'}
              width={'fit-content'}
              height={'40px'}
              bgColor={'transparent'}
              textColor={'purple.200'}
              borderRadius={'4px'}
              border="1px solid #6D5DD3"
              fontSize={{ base: `sm`, md: `md` }}
            />
            <SharedButton
              text={'Save Changes'}
              width={'fit-content'}
              height={'40px'}
              bgColor={'grey.300'}
              textColor={'grey.100'}
              borderRadius={'4px'}
              fontSize={{ base: `sm`, md: `md` }}
            />
          </Flex>
        </GridItem>
      </Grid>
    </FormControl>
  );
};
