/* eslint-disable @nx/enforce-module-boundaries */
import React from 'react';
import { Box, Card, Image, Text } from '@chakra-ui/react';
import { SharedButton } from '@productize/ui';
import { Link } from 'react-router-dom';

export const FunnelCard = ({ template, title }: { template: string; title: string }) => {
  return (
    <Box maxW={`260px`} maxH={`225px`} padding={`30px`} border={`1px solid lightgrey`} borderRadius={`8px`}>
      <Card variant={`unstyled`} bgColor={`purple.200`} width={`100%`} h={`80px`} borderRadius={`6px`}>
        <Image
          objectFit={`contain`}
          w={`100%`}
          h={`100%`}
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951014/productize/21_pqfpr8_cia6fu.png`}
          alt={`template`}
        />
      </Card>
      <Text fontWeight={`bold`} my={`13px`} textAlign={`center`}>
        {title}
      </Text>
      <Link to={`/dashboard/funnels/editor`} state={{ title, template }}>
        <SharedButton
          text={`Select template`}
          width={`100%`}
          height={`40px`}
          btnExtras={{ border: `1px solid purple` }}
          bgColor={`transparent`}
          textColor={`purple.200`}
          borderRadius={`4px`}
          fontSize={{}}
        />
      </Link>
    </Box>
  );
};
