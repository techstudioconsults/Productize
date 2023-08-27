import { SectionLayout } from './SectionLayout';
import { Box, Container, Text } from '@chakra-ui/react';
import { SharedButton } from '@productize/shared/ui';

export const SharedSection = () => {
  return (
    <SectionLayout height={''} bgColor={'purple.200'} bgImg={''}>
      <Container
        maxW={`70rem`}
        textAlign={`center`}
        py={20}
        color={`purple.100`}
      >
        <Text as={`h3`}>Starting monetize on Productize</Text>
        <Text as={`h6`} fontWeight={400} maxW={`35rem`} m={`auto`} my={5}>
          With Productize, turn your creativity into a lucrative business
          venture by showcasing and selling your work online.
        </Text>
        <SharedButton
          text={'Create an Account'}
          width={{ base: `100%`, xl: `307px` }}
          height={'56px'}
          bgColor={'yellow.200'}
          textColor={'white'}
          borderRadius={'4px'}
          fontSize={{ base: `sm`, xl: `md` }}
        />
      </Container>
    </SectionLayout>
  );
};
