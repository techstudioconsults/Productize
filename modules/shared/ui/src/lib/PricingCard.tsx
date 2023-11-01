import React from 'react';
import { Box, Flex, List, ListItem, Tag, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { SharedButton } from './SharedButton';
import { usePlanUpgrade, useSetPaymentPlan } from '@productize-v1.0.0/modules/shared/hooks';
import { CardLayout, cardProps } from '@productize-v1.0.0/modules/external-pages/ui';


export interface pricingCardProps {
  cardProps: cardProps;
  listItems: Array<string>;
  iconColor: string;
  amount: string | number;
  status: string;
  textColor: string;
  tagProps: {
    title: string;
    bgColor: string;
    color: string;
  };
  statusColor: string;
  showButton?: boolean;
}

export const PricingCard = ({
  cardProps,
  listItems,
  iconColor,
  amount,
  status,
  textColor,
  statusColor,
  tagProps,
  showButton,
}: pricingCardProps) => {
  const { upgrade, upgradeStatus } = usePlanUpgrade();
  const isPremium = useSetPaymentPlan();

  const lists = listItems?.map((list, index) => {
    return (
      <ListItem key={index} display={`flex`} alignItems={`flex-start`} gap={2}>
        <Icon fontSize={`1.5rem`} color={iconColor} icon={`gg:check`} />
        <Text className="small-text" color={textColor}>
          {list}
        </Text>
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
        p={`36px`}
      >
        <Box>
          <Box mb={8}>
            <Flex alignItems={`center`} justifyContent={`space-between`}>
              <Text fontWeight={500} color={statusColor}>
                {status}
              </Text>
              <Tag
                fontWeight={600}
                color={
                  isPremium && cardProps.bgColor === `purple.300`
                    ? `grey.100`
                    : tagProps.color
                }
                bgColor={
                  isPremium && cardProps.bgColor === `purple.300`
                    ? `green.200`
                    : tagProps.bgColor
                }
                size={`lg`}
              >
                {isPremium && cardProps.bgColor === `purple.300`
                  ? `Current Plan`
                  : isPremium
                  ? `casual`
                  : tagProps.title}
              </Tag>
            </Flex>
            <Text mt={4} as={`h3`} color={textColor} fontWeight={700}>
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
        </Box>
        <Box hidden={!showButton || isPremium}>
          <SharedButton
            text={'Upgrade Plan'}
            width={'100%'}
            height={'56px'}
            bgColor={'purple.200'}
            textColor={'white'}
            borderRadius={'4px'}
            fontSize={{}}
            btnExtras={{
              isLoading: upgradeStatus.isLoading,
              onClick: () => upgrade(),
            }}
          />
        </Box>
      </Flex>
    </CardLayout>
  );
};
