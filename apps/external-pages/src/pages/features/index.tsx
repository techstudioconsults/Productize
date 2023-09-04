import React from 'react';
import DefaultLayout from '../../layouts/Layout';
import {
  DualSectionLayout,
  DualSectionLayoutList,
  Hero,
  SectionLayout,
  SharedSection,
} from '@productize/external-pages-lib/ui';
import {
  Box,
  Container,
  Image,
  Stack,
  Text,
  Highlight,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { SharedButton } from '@productize/shared/ui';

const Features: React.FC = () => {
  return (
    <DefaultLayout>
      <Hero
        height={{ base: `35rem`, xl: `39rem` }}
        bgImg={''}
        bgColor={'green.100'}
      >
        <Stack gap={10}>
          <Container
            zIndex={3}
            color={`yellow.300`}
            mt={`10rem`}
            textAlign={`center`}
            maxW={`70rem`}
          >
            <Text lineHeight={`shorter`} as={`h1`}>
              <Highlight query="product." styles={{ color: 'purple.200' }}>
                You customize your product.
              </Highlight>
            </Text>

            <Text as={`h5`} maxW={`35rem`} margin={`auto`} mt={3}>
              The opportunity to share knowledge with individuals and businesses
              of same passion.
            </Text>
          </Container>
          <Container display={{ xl: `none` }} w={`fit-content`}>
            <Link to={``}>
              <SharedButton
                fontSize={{ base: `sm`, md: `md` }}
                text={'Get Started'}
                width={'160px'}
                height={'48px'}
                bgColor={'purple.200'}
                textColor={'white'}
                borderRadius={'4px'}
              />
            </Link>
          </Container>
          <Box mt={{ base: `-4rem`, xl: `-18rem` }}>
            <Image
              alt={`hero-illustration`}
              src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693146811/productize/shopping_box_tshirt_hat_wristwatch_stickers_sticker_2_w6dqiv.png`}
            />
          </Box>
        </Stack>
      </Hero>
      <SectionLayout height={''} bgColor={''} bgImg={''}>
        <Container
          maxW={`60rem`}
          textAlign={`center`}
          py={20}
          color={`yellow.300`}
        >
          <Text as={`h1`} lineHeight={`shorter`}>
            Grab visitors attention with detailed products.
          </Text>
          <Text maxW={`34rem`} m={`auto`} my={5}>
            Explore our massive suite of design features and rich libraries of
            free visual content. They’re all customizable to make your site look
            just right.
          </Text>
        </Container>
      </SectionLayout>
      <DualSectionLayout
        height={{ base: ``, xl: `40rem` }}
        img={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693165324/productize/Group_7_osmkqe.png`}
        flexDirection={{ base: `column`, xl: `row` }}
        textSectionBgColor={'purple.100'}
        imgSectionBgColor={'coral.300'}
        justifyContent={`flex-end`}
        imgPosition={`center`}
        imgFit={{ base: `contain` }}
      >
        <Flex
          alignItems={`center`}
          color={`purple.300`}
          height={`100%`}
          py={10}
        >
          <Container
            // textAlign={{ base: `center`, xl: `initial` }}
            maxW={`35rem`}
            px={{ base: 4, xl: 0 }}
            pr={{ base: 4, xl: 16 }}
          >
            <DualSectionLayoutList
              shouldShowButton={true}
              iconColor={`#F6C21C`}
              title={'Create products with ease'}
              subTitle={
                'Receive money from anywhere, blah blah blah blah blah.'
              }
              listItems={[
                `Receive money from anywhere, blah blah blah blah blah.`,
                `Receive money from anywhere, blah blah blah blah blah.`,
              ]}
            />
          </Container>
        </Flex>
      </DualSectionLayout>
      <SectionLayout height={''} bgColor={''} bgImg={''}>
        <Container
          maxW={`60rem`}
          textAlign={`center`}
          py={20}
          color={`yellow.300`}
        >
          <Text as={`h1`} lineHeight={`shorter`}>
            Share your products.
          </Text>
          <Text maxW={`34rem`} m={`auto`} my={5}>
            Explore our massive suite of design features and rich libraries of
            free visual content. They’re all customizable to make your site look
            just right.
          </Text>
        </Container>
      </SectionLayout>
      <DualSectionLayout
        height={{ base: ``, xl: `40rem` }}
        img={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693165324/productize/Group_7_osmkqe.png`}
        flexDirection={{ base: `column`, xl: `row` }}
        textSectionBgColor={'yellow.200'}
        imgSectionBgColor={'purple.100'}
        justifyContent={`flex-end`}
        imgPosition={`center`}
        imgFit={{ base: `contain` }}
      >
        <Flex
          alignItems={`center`}
          color={`purple.300`}
          height={`100%`}
          py={10}
        >
          <Container
            // textAlign={{ base: `center`, xl: `initial` }}
            maxW={`35rem`}
            px={{ base: 4, xl: 0 }}
            pr={{ base: 4, xl: 16 }}
          >
            <DualSectionLayoutList
              shouldShowButton={false}
              iconColor={`white`}
              title={'Raise an army of community.'}
              subTitle={
                'Receive money from anywhere, blah blah blah blah blah.'
              }
              listItems={[
                `Receive money from anywhere, blah blah blah blah blah.`,
                `Receive money from anywhere, blah blah blah blah blah.`,
              ]}
            />
          </Container>
        </Flex>
      </DualSectionLayout>
      <DualSectionLayout
        height={{ base: ``, xl: `40rem` }}
        img={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693170251/productize/Frame_40549_ca4y8f.png`}
        flexDirection={{ base: `column`, xl: `row-reverse` }}
        textSectionBgColor={'purple.300'}
        imgSectionBgColor={'purple.100'}
        justifyContent={`flex-start`}
        imgPosition={`center`}
        imgFit={{ base: `contain` }}
      >
        <Flex
          alignItems={`center`}
          color={`purple.100`}
          height={`100%`}
          py={10}
        >
          <Container
            // textAlign={{ base: `center`, xl: `initial` }}
            maxW={`35rem`}
            px={{ base: 4, xl: 0 }}
            pl={{ base: 4, xl: 16 }}
          >
            <DualSectionLayoutList
              shouldShowButton={false}
              iconColor={`#F6C21C`}
              title={'Making Money'}
              subTitle={
                'Receive money from anywhere, blah blah blah blah blah.'
              }
              listItems={[
                `Receive money from anywhere, blah blah blah blah blah.`,
                `Receive money from anywhere, blah blah blah blah blah.`,
                `Receive money from anywhere, blah blah blah blah blah.`,
              ]}
            />
          </Container>
        </Flex>
      </DualSectionLayout>
      <SharedSection />
    </DefaultLayout>
  );
};

export default Features;
