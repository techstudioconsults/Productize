import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

export interface TwoColumnLayoutProps {
  C1: React.ReactNode;
  C2: React.ReactNode;
}

export const TwoColumnLayout = ({ C1, C2 }: TwoColumnLayoutProps) => {
  return (
    <Grid
      h="200px"
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(12, 1fr)"
      gap={4}
    >
      <GridItem colSpan={8}>{C1}</GridItem>
      <GridItem colSpan={4}>{C2}</GridItem>
    </Grid>
  );
};
