import React from 'react';
import { CardLayout, cardProps } from './CardLayout';
import { Box, Flex, List, ListItem, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { SharedButton } from '@productize/shared/ui';

export interface pricingCardProps {
  cardProps: cardProps;
  listItems: Array<string>;
  iconColor: string;
  amount: string | number;
  status: string;
  textColor: string;
  statusColor: string;
}

export const PricingCard = ({
  cardProps,
  listItems,
  iconColor,
  amount,
  status,
  textColor,
  statusColor,
}: pricingCardProps) => {
  const lists = listItems?.map((list, index) => {
    return (
      <ListItem key={index} display={`flex`} alignItems={`flex-start`} gap={2}>
        <Icon fontSize={`1.5rem`} color={iconColor} icon={`gg:check`} />
        <Text color={textColor}>{list}</Text>
      </ListItem>
    );
  });

  return (
    <CardLayout
      bgColor={cardProps.bgColor}
      width={cardProps.width}
      height={cardProps.height}
      borderRadius={cardProps.borderRadius}
    >
      <Flex
        flexDir={`column`}
        justifyContent={`space-between`}
        height={`100%`}
        p={`16px 36px`}
      >
        <Box>
          <Text as={`h6`} fontWeight={500} color={statusColor}>
            {status}
          </Text>
          <Text as={`h3`} color={textColor} fontWeight={700}>
            NGN {amount}
            <Text
              fontSize={`18px`}
              fontWeight={200}
              color={`grey.400`}
              as={`span`}
            >
              /Per Month
            </Text>
          </Text>
        </Box>
        <List spacing={3}>{lists}</List>
        <SharedButton
          text={'Start Creating'}
          width={'100%'}
          height={'56px'}
          bgColor={'purple.200'}
          textColor={'white'}
          borderRadius={'4px'}
          fontSize={{}}
        />
      </Flex>
    </CardLayout>
  );
};
