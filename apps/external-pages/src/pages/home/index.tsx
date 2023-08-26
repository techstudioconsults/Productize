import { Box, Container, Image, Stack, Text } from '@chakra-ui/react';
import DefaultLayout from '../../layouts/Layout';
import { Hero } from '@productize/external-pages-lib/ui';
import { Link } from 'react-router-dom';
import { SharedButton } from '@productize/shared/ui';

const Home = () => {
  return (
    <DefaultLayout>
      <Hero
        height={'42.2rem'}
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
          <Container zIndex={999} maxW={`1120px`}>
            <Image
              alt={`hero-illustration`}
              src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693082103/productize/Group_5_pximlf.png`}
            />
          </Container>
        </Stack>
      </Hero>
      <Box height={`30rem`} bgColor={`yellow.200`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quaerat
        eveniet consectetur quisquam tempora dignissimos suscipit harum
        blanditiis. Sapiente saepe dolor aliquid, odio aperiam placeat, enim
        iure veritatis blanditiis distinctio, suscipit soluta animi. Officiis
        sint alias nobis facilis, vero adipisci maxime illum qui quod
        exercitationem eius vel! Ipsa dicta, dolor quod perferendis quos
        exercitationem possimus, aut dignissimos vitae debitis incidunt
        asperiores ea molestiae quas voluptate error omnis atque odit saepe
        veritatis, quidem ex ducimus dolores pariatur. Iure delectus incidunt
        nesciunt molestiae minus ex nihil est tempora, libero odio impedit
        suscipit deleniti optio explicabo distinctio quasi reiciendis numquam
        nisi dolore doloremque.
      </Box>
    </DefaultLayout>
  );
};

export default Home;
