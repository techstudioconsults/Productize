import {
  Box,
  CardBody,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import DefaultLayout from '../../layouts/Layout';
import {
  CardLayout,
  Hero,
  SectionLayout,
} from '@productize/external-pages-lib/ui';
import { Link } from 'react-router-dom';
import { SharedButton } from '@productize/shared/ui';

const Home = () => {
  return (
    <DefaultLayout>
      <Hero
        height={{ base: `39rem`, xl: `42.2rem` }}
        bgImg={
          'https://res.cloudinary.com/dkszgtapy/image/upload/v1693082100/productize/Group_6_jgbemc.png'
        }
        bgColor={'purple.200'}
      >
        <Stack gap={10}>
          <Container
            color={`white`}
            mt={`8rem`}
            textAlign={`center`}
            maxW={`46.3rem`}
          >
            <Text lineHeight={`shorter`} as={`h1`}>
              Monetize your skills with ease
            </Text>
            <Text color={`purple.100`} mt={3} fontWeight={400} as={`h5`}>
              With Productize, selling your products online is hassle-free. You
              can showcase your work and let us handle the backend tasks,
              allowing you to concentrate on what you do best.
            </Text>
          </Container>
          <Container display={{ xl: `none` }} w={`fit-content`}>
            <Link to={``}>
              <SharedButton
                fontSize={{ base: `sm`, md: `md` }}
                text={'Get Started'}
                width={'160px'}
                height={'48px'}
                bgColor={'yellow.200'}
                textColor={'white'}
                borderRadius={'4px'}
              />
            </Link>
          </Container>
          <Container zIndex={2} maxW={`1120px`}>
            <Image
              alt={`hero-illustration`}
              src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693082103/productize/Group_5_pximlf.png`}
            />
          </Container>
        </Stack>
      </Hero>
      <SectionLayout height={'fit-content'} bgColor={'yellow.100'} bgImg={''}>
        <Container maxW={`70rem`} pt={{base: `5rem`, xl: `25rem` }} px={{ base: 4, xl: 0 }}>
          <Flex gap={20} flexDir={{ base: `column`, xl: `row` }}>
            <Box flex={1} color={`yellow.300`}>
              <Text as={`h1`} lineHeight={`shorter`}>
                You can monetize everything
              </Text>
              <Text as={`h5`} my={`2rem`}>
                Productize offers you an opportunity to monetize your passion by
                providing a platform that allows you to showcase and sell your
                work online.
              </Text>
              <Box display={{ base: `none`, xl: `block` }}>
                <SharedButton
                  text={'Get Started'}
                  width={'22.5rem'}
                  height={'48px'}
                  bgColor={'purple.200'}
                  textColor={'white'}
                  borderRadius={'4px'}
                  fontSize={{ base: `sm`, md: `md` }}
                />
              </Box>
            </Box>
            <SimpleGrid flex={2} columns={{ base: 1, xl: 2 }} spacing={10}>
              {/* card 1 */}
              <Box>
                <CardLayout
                  bgColor={'white'}
                  width={'100%'}
                  borderRadius={'16px'}
                  height={`100%`}
                >
                  <CardBody p={`23px`}>
                    <Image
                      src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693129664/productize/Image_1_wc3l2p.png`}
                      alt=""
                    />
                    <Text as={`h5`} my={2}>
                      Digital Product
                    </Text>
                    <Text fontWeight={400} color={`grey.500`} as={`h6`}>
                      Any set of files to download or stream.
                    </Text>
                  </CardBody>
                </CardLayout>
              </Box>
              {/* card 2 */}
              <Box>
                <CardLayout
                  bgColor={'white'}
                  width={'100%'}
                  borderRadius={'16px'}
                  height={`100%`}
                >
                  <CardBody p={`23px`}>
                    <Image
                      src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693129663/productize/Image_2_co17c3.png`}
                      alt=""
                    />
                    <Text as={`h5`} my={2}>
                      Print On Demand
                    </Text>
                    <Text fontWeight={400} color={`grey.500`} as={`h6`}>
                      Any set of files to download or stream.
                    </Text>
                  </CardBody>
                </CardLayout>
              </Box>
              {/* card 3 */}
              <Box>
                <CardLayout
                  bgColor={'white'}
                  width={'100%'}
                  borderRadius={'16px'}
                  height={`100%`}
                >
                  <CardBody p={`23px`}>
                    <Image
                      src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693129663/productize/Image_3_l61xsx.png`}
                      alt=""
                    />
                    <Text as={`h5`} my={2}>
                      Video Streaming
                    </Text>
                    <Text fontWeight={400} color={`grey.500`} as={`h6`}>
                      Let customers listen to your audio content.
                    </Text>
                  </CardBody>
                </CardLayout>
              </Box>
              {/* card 4 */}
              <Box>
                <CardLayout
                  bgColor={'white'}
                  width={'100%'}
                  borderRadius={'16px'}
                  height={`100%`}
                >
                  <CardBody p={`23px`}>
                    <Image
                      src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693129662/productize/Image_4_hksvcm.png`}
                      alt=""
                    />
                    <Text as={`h5`} my={2}>
                      Subscription
                    </Text>
                    <Text fontWeight={400} color={`grey.500`} as={`h6`}>
                      Let customers subscribe to your contents.
                    </Text>
                  </CardBody>
                </CardLayout>
              </Box>
            </SimpleGrid>
          </Flex>
        </Container>
      </SectionLayout>
    </DefaultLayout>
  );
};

export default Home;
