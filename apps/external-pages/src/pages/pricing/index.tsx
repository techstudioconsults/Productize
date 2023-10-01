import React from 'react';
import DefaultLayout from '../../layouts/Layout';
import {
  AccordionComponent,
  Hero,
  SectionLayout,
  SharedSection,
} from '@productize/external-pages-lib/ui';
import { Box, Container, Flex, Highlight, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { PricingCard, SharedButton } from '@productize/shared/ui';
import { useSetPaymentPlan } from '@productize/shared/hooks';

const Pricing = () => {
  const isPremium = useSetPaymentPlan();
  return (
    <DefaultLayout>
      <Hero
        height={{ base: `30rem`, xl: '60rem' }}
        bgImg={
          'https://res.cloudinary.com/kingsleysolomon/image/upload/v1693817846/productize/Lines_pqnlnq.png'
        }
        bgColor={'yellow.100'}
      >
        <Stack gap={10}>
          <Container
            color={`yellow.300`}
            mt={`8rem`}
            textAlign={`center`}
            maxW={`46.3rem`}
          >
            <Text lineHeight={`shorter`} as={`h1`}>
              We prioritize your sales and profit
            </Text>
            <Text fontWeight={100} as={`h5`} mt={3}>
              Productize looks out for a better life with a money making system,
              no monthly charges. Just for you
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
          <Flex
            display={{ base: `none`, xl: `flex` }}
            flexDir={{ base: `column`, xl: `row` }}
            gap={10}
            mt={`7rem`}
          >
            <PricingCard
              cardProps={{
                bgColor: `purple.100`,
                width: { base: `100%`, xl: `25rem` },
                height: `556px`,
                borderRadius: `8px`,
              }}
              listItems={[
                `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
              ]}
              iconColor={'black'}
              amount={0}
              status={'Free'}
              textColor={'yellow.300'}
              statusColor={'yellow.300'}
              tagProps={{
                title: 'Current Plan',
                bgColor: 'grey.800',
                color: `white`,
              }}
            />
            <PricingCard
              showButton
              cardProps={{
                bgColor: `purple.300`,
                width: { base: `100%`, xl: `25rem` },
                height: `556px`,
                borderRadius: `8px`,
              }}
              listItems={[
                `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
              ]}
              iconColor={'gold'}
              amount={5000}
              status={'premium'}
              textColor={'purple.100'}
              statusColor={'yellow.100'}
              tagProps={{
                title:  'Best Value',
                bgColor:  'yellow.100',
                color: `yellow.300`,
              }}
            />
          </Flex>
        </Stack>
      </Hero>
      <SectionLayout height={'fit-content'} bgColor={'white'} bgImg={''}>
        <Container
          maxW={`70rem`}
          pt={{ base: `5rem`, xl: `15rem` }}
          pb={{ base: `5rem`, xl: `15rem` }}
          px={{ base: 4, xl: 0 }}
        >
          <Flex
            gap={20}
            flexDir={{ base: `column`, xl: `row` }}
            alignItems={`flex-start`}
          >
            <Box textAlign={{ base: `center`, xl: `initial` }} flex={1}>
              <Text as={`h2`} lineHeight={`shorter`}>
                Frequently asked questions
              </Text>
              <Text as={`h5`} fontWeight={100} my={`2rem`}>
                <Highlight
                  query="Try the Productize Help
                  Center or Contact us"
                  styles={{ color: 'purple.200' }}
                >
                  Haven’t found what you’re looking for? Try the Productize Help
                  Center or Contact us
                </Highlight>
              </Text>
            </Box>
            <Box flex={1}>
              <AccordionComponent />
            </Box>
          </Flex>
        </Container>
      </SectionLayout>
      <SharedSection />
    </DefaultLayout>
  );
};

export default Pricing;
