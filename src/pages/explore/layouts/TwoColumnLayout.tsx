import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

export interface TwoColumnLayoutProps {
  C1: React.ReactNode;
  C2: React.ReactNode;
}

export const TwoColumnLayout = ({ C1, C2 }: TwoColumnLayoutProps) => {
  return (
    <Grid
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(12, 1fr)"
      gap={4}
    >
      <GridItem colSpan={{ base: 12, xl: 8 }}>{C1}</GridItem>
      <GridItem colSpan={{ base: 12, xl: 4 }}>{C2}</GridItem>
    </Grid>
  );
};
